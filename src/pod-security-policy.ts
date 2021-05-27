// https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PodSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#metadata PodSecurityPolicy#metadata}
  */
  readonly metadata: PodSecurityPolicyMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#spec PodSecurityPolicy#spec}
  */
  readonly spec: PodSecurityPolicySpec[];
}
export interface PodSecurityPolicyMetadata {
  /**
  * An unstructured key value map stored with the podsecuritypolicy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#annotations PodSecurityPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the podsecuritypolicy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#labels PodSecurityPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the podsecuritypolicy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#name PodSecurityPolicy#name}
  */
  readonly name?: string;
}

function podSecurityPolicyMetadataToTerraform(struct?: PodSecurityPolicyMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface PodSecurityPolicySpecAllowedFlexVolumes {
  /**
  * driver is the name of the Flexvolume driver.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#driver PodSecurityPolicy#driver}
  */
  readonly driver: string;
}

function podSecurityPolicySpecAllowedFlexVolumesToTerraform(struct?: PodSecurityPolicySpecAllowedFlexVolumes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
  }
}

export interface PodSecurityPolicySpecAllowedHostPaths {
  /**
  * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.

Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#path_prefix PodSecurityPolicy#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#read_only PodSecurityPolicy#read_only}
  */
  readonly readOnly?: boolean;
}

function podSecurityPolicySpecAllowedHostPathsToTerraform(struct?: PodSecurityPolicySpecAllowedHostPaths): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}

export interface PodSecurityPolicySpecFsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

function podSecurityPolicySpecFsGroupRangeToTerraform(struct?: PodSecurityPolicySpecFsGroupRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecFsGroup {
  /**
  * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecFsGroupRange[];
}

function podSecurityPolicySpecFsGroupToTerraform(struct?: PodSecurityPolicySpecFsGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecFsGroupRangeToTerraform)(struct!.range),
  }
}

export interface PodSecurityPolicySpecHostPorts {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

function podSecurityPolicySpecHostPortsToTerraform(struct?: PodSecurityPolicySpecHostPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecRunAsGroupRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

function podSecurityPolicySpecRunAsGroupRangeToTerraform(struct?: PodSecurityPolicySpecRunAsGroupRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecRunAsGroup {
  /**
  * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecRunAsGroupRange[];
}

function podSecurityPolicySpecRunAsGroupToTerraform(struct?: PodSecurityPolicySpecRunAsGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecRunAsGroupRangeToTerraform)(struct!.range),
  }
}

export interface PodSecurityPolicySpecRunAsUserRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

function podSecurityPolicySpecRunAsUserRangeToTerraform(struct?: PodSecurityPolicySpecRunAsUserRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecRunAsUser {
  /**
  * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecRunAsUserRange[];
}

function podSecurityPolicySpecRunAsUserToTerraform(struct?: PodSecurityPolicySpecRunAsUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecRunAsUserRangeToTerraform)(struct!.range),
  }
}

export interface PodSecurityPolicySpecSeLinuxSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#level PodSecurityPolicy#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#role PodSecurityPolicy#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#type PodSecurityPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#user PodSecurityPolicy#user}
  */
  readonly user: string;
}

function podSecurityPolicySpecSeLinuxSeLinuxOptionsToTerraform(struct?: PodSecurityPolicySpecSeLinuxSeLinuxOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export interface PodSecurityPolicySpecSeLinux {
  /**
  * rule is the strategy that will dictate the allowable labels that may be set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * se_linux_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#se_linux_options PodSecurityPolicy#se_linux_options}
  */
  readonly seLinuxOptions?: PodSecurityPolicySpecSeLinuxSeLinuxOptions[];
}

function podSecurityPolicySpecSeLinuxToTerraform(struct?: PodSecurityPolicySpecSeLinux): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    se_linux_options: cdktf.listMapper(podSecurityPolicySpecSeLinuxSeLinuxOptionsToTerraform)(struct!.seLinuxOptions),
  }
}

export interface PodSecurityPolicySpecSupplementalGroupsRange {
  /**
  * max is the end of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#max PodSecurityPolicy#max}
  */
  readonly max: number;
  /**
  * min is the start of the range, inclusive.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#min PodSecurityPolicy#min}
  */
  readonly min: number;
}

function podSecurityPolicySpecSupplementalGroupsRangeToTerraform(struct?: PodSecurityPolicySpecSupplementalGroupsRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}

export interface PodSecurityPolicySpecSupplementalGroups {
  /**
  * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#rule PodSecurityPolicy#rule}
  */
  readonly rule: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#range PodSecurityPolicy#range}
  */
  readonly range?: PodSecurityPolicySpecSupplementalGroupsRange[];
}

function podSecurityPolicySpecSupplementalGroupsToTerraform(struct?: PodSecurityPolicySpecSupplementalGroups): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
    range: cdktf.listMapper(podSecurityPolicySpecSupplementalGroupsRangeToTerraform)(struct!.range),
  }
}

export interface PodSecurityPolicySpec {
  /**
  * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allow_privilege_escalation PodSecurityPolicy#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean;
  /**
  * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_capabilities PodSecurityPolicy#allowed_capabilities}
  */
  readonly allowedCapabilities?: string[];
  /**
  * AllowedProcMountTypes is an allowlist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_proc_mount_types PodSecurityPolicy#allowed_proc_mount_types}
  */
  readonly allowedProcMountTypes?: string[];
  /**
  * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to allowlist all allowed unsafe sysctls explicitly to avoid rejection.

Examples: e.g. "foo/*" allows "foo/bar", "foo/baz", etc. e.g. "foo.*" allows "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_unsafe_sysctls PodSecurityPolicy#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#default_add_capabilities PodSecurityPolicy#default_add_capabilities}
  */
  readonly defaultAddCapabilities?: string[];
  /**
  * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#default_allow_privilege_escalation PodSecurityPolicy#default_allow_privilege_escalation}
  */
  readonly defaultAllowPrivilegeEscalation?: boolean;
  /**
  * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in "*" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.

Examples: e.g. "foo/*" forbids "foo/bar", "foo/baz", etc. e.g. "foo.*" forbids "foo.bar", "foo.baz", etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#forbidden_sysctls PodSecurityPolicy#forbidden_sysctls}
  */
  readonly forbiddenSysctls?: string[];
  /**
  * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_ipc PodSecurityPolicy#host_ipc}
  */
  readonly hostIpc?: boolean;
  /**
  * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_network PodSecurityPolicy#host_network}
  */
  readonly hostNetwork?: boolean;
  /**
  * hostPID determines if the policy allows the use of HostPID in the pod spec.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_pid PodSecurityPolicy#host_pid}
  */
  readonly hostPid?: boolean;
  /**
  * privileged determines if a pod can request to be run as privileged.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#privileged PodSecurityPolicy#privileged}
  */
  readonly privileged?: boolean;
  /**
  * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#read_only_root_filesystem PodSecurityPolicy#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean;
  /**
  * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#required_drop_capabilities PodSecurityPolicy#required_drop_capabilities}
  */
  readonly requiredDropCapabilities?: string[];
  /**
  * volumes is an allowlist of volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use '*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#volumes PodSecurityPolicy#volumes}
  */
  readonly volumes?: string[];
  /**
  * allowed_flex_volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_flex_volumes PodSecurityPolicy#allowed_flex_volumes}
  */
  readonly allowedFlexVolumes?: PodSecurityPolicySpecAllowedFlexVolumes[];
  /**
  * allowed_host_paths block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#allowed_host_paths PodSecurityPolicy#allowed_host_paths}
  */
  readonly allowedHostPaths?: PodSecurityPolicySpecAllowedHostPaths[];
  /**
  * fs_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#fs_group PodSecurityPolicy#fs_group}
  */
  readonly fsGroup: PodSecurityPolicySpecFsGroup[];
  /**
  * host_ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#host_ports PodSecurityPolicy#host_ports}
  */
  readonly hostPorts?: PodSecurityPolicySpecHostPorts[];
  /**
  * run_as_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#run_as_group PodSecurityPolicy#run_as_group}
  */
  readonly runAsGroup?: PodSecurityPolicySpecRunAsGroup[];
  /**
  * run_as_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#run_as_user PodSecurityPolicy#run_as_user}
  */
  readonly runAsUser: PodSecurityPolicySpecRunAsUser[];
  /**
  * se_linux block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#se_linux PodSecurityPolicy#se_linux}
  */
  readonly seLinux?: PodSecurityPolicySpecSeLinux[];
  /**
  * supplemental_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html#supplemental_groups PodSecurityPolicy#supplemental_groups}
  */
  readonly supplementalGroups: PodSecurityPolicySpecSupplementalGroups[];
}

function podSecurityPolicySpecToTerraform(struct?: PodSecurityPolicySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    allowed_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedCapabilities),
    allowed_proc_mount_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedProcMountTypes),
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedUnsafeSysctls),
    default_add_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.defaultAddCapabilities),
    default_allow_privilege_escalation: cdktf.booleanToTerraform(struct!.defaultAllowPrivilegeEscalation),
    forbidden_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.forbiddenSysctls),
    host_ipc: cdktf.booleanToTerraform(struct!.hostIpc),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    host_pid: cdktf.booleanToTerraform(struct!.hostPid),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    required_drop_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requiredDropCapabilities),
    volumes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.volumes),
    allowed_flex_volumes: cdktf.listMapper(podSecurityPolicySpecAllowedFlexVolumesToTerraform)(struct!.allowedFlexVolumes),
    allowed_host_paths: cdktf.listMapper(podSecurityPolicySpecAllowedHostPathsToTerraform)(struct!.allowedHostPaths),
    fs_group: cdktf.listMapper(podSecurityPolicySpecFsGroupToTerraform)(struct!.fsGroup),
    host_ports: cdktf.listMapper(podSecurityPolicySpecHostPortsToTerraform)(struct!.hostPorts),
    run_as_group: cdktf.listMapper(podSecurityPolicySpecRunAsGroupToTerraform)(struct!.runAsGroup),
    run_as_user: cdktf.listMapper(podSecurityPolicySpecRunAsUserToTerraform)(struct!.runAsUser),
    se_linux: cdktf.listMapper(podSecurityPolicySpecSeLinuxToTerraform)(struct!.seLinux),
    supplemental_groups: cdktf.listMapper(podSecurityPolicySpecSupplementalGroupsToTerraform)(struct!.supplementalGroups),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html kubernetes_pod_security_policy}
*/
export class PodSecurityPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/pod_security_policy.html kubernetes_pod_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodSecurityPolicyConfig
  */
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
      metadata: cdktf.listMapper(podSecurityPolicyMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(podSecurityPolicySpecToTerraform)(this._spec),
    };
  }
}
