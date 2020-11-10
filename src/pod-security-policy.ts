// https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface PodSecurityPolicyConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: PodSecurityPolicyMetadata[];
  /** spec block */
  readonly spec: PodSecurityPolicySpec[];
}
export interface PodSecurityPolicyMetadata {
  /** An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
}
export interface PodSecurityPolicySpecAllowedFlexVolumes {
  /** driver is the name of the Flexvolume driver. */
  readonly driver: string;
}
export interface PodSecurityPolicySpecAllowedHostPaths {
  /** pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo` */
  readonly pathPrefix: string;
  /** when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly. */
  readonly readOnly?: boolean;
}
export interface PodSecurityPolicySpecFsGroupRange {
  /** max is the end of the range, inclusive. */
  readonly max: number;
  /** min is the start of the range, inclusive. */
  readonly min: number;
}
export interface PodSecurityPolicySpecFsGroup {
  /** rule is the strategy that will dictate what FSGroup is used in the SecurityContext. */
  readonly rule: string;
  /** range block */
  readonly range?: PodSecurityPolicySpecFsGroupRange[];
}
export interface PodSecurityPolicySpecHostPorts {
  /** max is the end of the range, inclusive. */
  readonly max: number;
  /** min is the start of the range, inclusive. */
  readonly min: number;
}
export interface PodSecurityPolicySpecRunAsGroupRange {
  /** max is the end of the range, inclusive. */
  readonly max: number;
  /** min is the start of the range, inclusive. */
  readonly min: number;
}
export interface PodSecurityPolicySpecRunAsGroup {
  /** rule is the strategy that will dictate the allowable RunAsGroup values that may be set. */
  readonly rule: string;
  /** range block */
  readonly range?: PodSecurityPolicySpecRunAsGroupRange[];
}
export interface PodSecurityPolicySpecRunAsUserRange {
  /** max is the end of the range, inclusive. */
  readonly max: number;
  /** min is the start of the range, inclusive. */
  readonly min: number;
}
export interface PodSecurityPolicySpecRunAsUser {
  /** rule is the strategy that will dictate the allowable RunAsUser values that may be set. */
  readonly rule: string;
  /** range block */
  readonly range?: PodSecurityPolicySpecRunAsUserRange[];
}
export interface PodSecurityPolicySpecSeLinuxSeLinuxOptions {
  readonly level: string;
  readonly role: string;
  readonly type: string;
  readonly user: string;
}
export interface PodSecurityPolicySpecSeLinux {
  /** rule is the strategy that will dictate the allowable labels that may be set. */
  readonly rule: string;
  /** se_linux_options block */
  readonly seLinuxOptions?: PodSecurityPolicySpecSeLinuxSeLinuxOptions[];
}
export interface PodSecurityPolicySpecSupplementalGroupsRange {
  /** max is the end of the range, inclusive. */
  readonly max: number;
  /** min is the start of the range, inclusive. */
  readonly min: number;
}
export interface PodSecurityPolicySpecSupplementalGroups {
  /** rule is the strategy that will dictate what supplemental groups is used in the SecurityContext. */
  readonly rule: string;
  /** range block */
  readonly range?: PodSecurityPolicySpecSupplementalGroupsRange[];
}
export interface PodSecurityPolicySpec {
  /** allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true. */
  readonly allowPrivilegeEscalation?: boolean;
  /** allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities. */
  readonly allowedCapabilities?: string[];
  /** AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled. */
  readonly allowedProcMountTypes?: string[];
  /** allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc. */
  readonly allowedUnsafeSysctls?: string[];
  /** defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list. */
  readonly defaultAddCapabilities?: string[];
  /** defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process. */
  readonly defaultAllowPrivilegeEscalation?: boolean;
  /** forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc. */
  readonly forbiddenSysctls?: string[];
  /** hostIPC determines if the policy allows the use of HostIPC in the pod spec. */
  readonly hostIpc?: boolean;
  /** hostNetwork determines if the policy allows the use of HostNetwork in the pod spec. */
  readonly hostNetwork?: boolean;
  /** hostPID determines if the policy allows the use of HostPID in the pod spec. */
  readonly hostPid?: boolean;
  /** privileged determines if a pod can request to be run as privileged. */
  readonly privileged?: boolean;
  /** readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to. */
  readonly readOnlyRootFilesystem?: boolean;
  /** requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added. */
  readonly requiredDropCapabilities?: string[];
  /** volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'. */
  readonly volumes?: string[];
  /** allowed_flex_volumes block */
  readonly allowedFlexVolumes?: PodSecurityPolicySpecAllowedFlexVolumes[];
  /** allowed_host_paths block */
  readonly allowedHostPaths?: PodSecurityPolicySpecAllowedHostPaths[];
  /** fs_group block */
  readonly fsGroup: PodSecurityPolicySpecFsGroup[];
  /** host_ports block */
  readonly hostPorts?: PodSecurityPolicySpecHostPorts[];
  /** run_as_group block */
  readonly runAsGroup?: PodSecurityPolicySpecRunAsGroup[];
  /** run_as_user block */
  readonly runAsUser: PodSecurityPolicySpecRunAsUser[];
  /** se_linux block */
  readonly seLinux?: PodSecurityPolicySpecSeLinux[];
  /** supplemental_groups block */
  readonly supplementalGroups: PodSecurityPolicySpecSupplementalGroups[];
}

// Resource

export class PodSecurityPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PodSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: PodSecurityPolicyMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: PodSecurityPolicyMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: PodSecurityPolicySpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: PodSecurityPolicySpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
      spec: this._spec,
    };
  }
}
