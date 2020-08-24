// https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: NetworkPolicyMetadata[];
  /** spec block */
  readonly spec: NetworkPolicySpec[];
}
export interface NetworkPolicyMetadata {
  /** An unstructured key value map stored with the network policy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the network policy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the network policy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the network policy must be unique. */
  readonly namespace?: string;
}
export interface NetworkPolicySpecEgressPorts {
  /** The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. */
  readonly port?: string;
  /** The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. */
  readonly protocol?: string;
}
export interface NetworkPolicySpecEgressToIpBlock {
  /** CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" */
  readonly cidr?: string;
  /** Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range */
  readonly except?: string[];
}
export interface NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface NetworkPolicySpecEgressToNamespaceSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[];
}
export interface NetworkPolicySpecEgressToPodSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface NetworkPolicySpecEgressToPodSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: NetworkPolicySpecEgressToPodSelectorMatchExpressions[];
}
export interface NetworkPolicySpecEgressTo {
  /** ip_block block */
  readonly ipBlock?: NetworkPolicySpecEgressToIpBlock[];
  /** namespace_selector block */
  readonly namespaceSelector?: NetworkPolicySpecEgressToNamespaceSelector[];
  /** pod_selector block */
  readonly podSelector?: NetworkPolicySpecEgressToPodSelector[];
}
export interface NetworkPolicySpecEgress {
  /** ports block */
  readonly ports?: NetworkPolicySpecEgressPorts[];
  /** to block */
  readonly to?: NetworkPolicySpecEgressTo[];
}
export interface NetworkPolicySpecIngressFromIpBlock {
  /** CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" */
  readonly cidr?: string;
  /** Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" Except values will be rejected if they are outside the CIDR range */
  readonly except?: string[];
}
export interface NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface NetworkPolicySpecIngressFromNamespaceSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[];
}
export interface NetworkPolicySpecIngressFromPodSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface NetworkPolicySpecIngressFromPodSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[];
}
export interface NetworkPolicySpecIngressFrom {
  /** ip_block block */
  readonly ipBlock?: NetworkPolicySpecIngressFromIpBlock[];
  /** namespace_selector block */
  readonly namespaceSelector?: NetworkPolicySpecIngressFromNamespaceSelector[];
  /** pod_selector block */
  readonly podSelector?: NetworkPolicySpecIngressFromPodSelector[];
}
export interface NetworkPolicySpecIngressPorts {
  /** The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. */
  readonly port?: string;
  /** The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. */
  readonly protocol?: string;
}
export interface NetworkPolicySpecIngress {
  /** from block */
  readonly from?: NetworkPolicySpecIngressFrom[];
  /** ports block */
  readonly ports?: NetworkPolicySpecIngressPorts[];
}
export interface NetworkPolicySpecPodSelectorMatchExpressions {
  /** The label key that the selector applies to. */
  readonly key?: string;
  /** A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. */
  readonly operator?: string;
  /** An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch. */
  readonly values?: string[];
}
export interface NetworkPolicySpecPodSelector {
  /** A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed. */
  readonly matchLabels?: { [key: string]: string };
  /** match_expressions block */
  readonly matchExpressions?: NetworkPolicySpecPodSelectorMatchExpressions[];
}
export interface NetworkPolicySpec {
  /** List of rule types that the NetworkPolicy relates to. Valid options are "Ingress", "Egress", or "Ingress,Egress". If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8 */
  readonly policyTypes: string[];
  /** egress block */
  readonly egress?: NetworkPolicySpecEgress[];
  /** ingress block */
  readonly ingress?: NetworkPolicySpecIngress[];
  /** pod_selector block */
  readonly podSelector: NetworkPolicySpecPodSelector[];
}

// Resource

export class NetworkPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetworkPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_network_policy',
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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: NetworkPolicyMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: NetworkPolicyMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: NetworkPolicySpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: NetworkPolicySpec[]) {
    this._spec = value;
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
