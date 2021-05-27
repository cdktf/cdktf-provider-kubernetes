// https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#metadata NetworkPolicy#metadata}
  */
  readonly metadata: NetworkPolicyMetadata[];
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#spec NetworkPolicy#spec}
  */
  readonly spec: NetworkPolicySpec[];
}
export interface NetworkPolicyMetadata {
  /**
  * An unstructured key value map stored with the network policy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#annotations NetworkPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#generate_name NetworkPolicy#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the network policy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#labels NetworkPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the network policy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#name NetworkPolicy#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the network policy must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace NetworkPolicy#namespace}
  */
  readonly namespace?: string;
}

function networkPolicyMetadataToTerraform(struct?: NetworkPolicyMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface NetworkPolicySpecEgressPorts {
  /**
  * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#port NetworkPolicy#port}
  */
  readonly port?: string;
  /**
  * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

function networkPolicySpecEgressPortsToTerraform(struct?: NetworkPolicySpecEgressPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface NetworkPolicySpecEgressToIpBlock {
  /**
  * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#cidr NetworkPolicy#cidr}
  */
  readonly cidr?: string;
  /**
  * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#except NetworkPolicy#except}
  */
  readonly except?: string[];
}

function networkPolicySpecEgressToIpBlockToTerraform(struct?: NetworkPolicySpecEgressToIpBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform)(struct!.except),
  }
}

export interface NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

function networkPolicySpecEgressToNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecEgressToNamespaceSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[];
}

function networkPolicySpecEgressToNamespaceSelectorToTerraform(struct?: NetworkPolicySpecEgressToNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecEgressToNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface NetworkPolicySpecEgressToPodSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

function networkPolicySpecEgressToPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecEgressToPodSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecEgressToPodSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecEgressToPodSelectorMatchExpressions[];
}

function networkPolicySpecEgressToPodSelectorToTerraform(struct?: NetworkPolicySpecEgressToPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecEgressToPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface NetworkPolicySpecEgressTo {
  /**
  * ip_block block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecEgressToIpBlock[];
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicySpecEgressToNamespaceSelector[];
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicySpecEgressToPodSelector[];
}

function networkPolicySpecEgressToToTerraform(struct?: NetworkPolicySpecEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_block: cdktf.listMapper(networkPolicySpecEgressToIpBlockToTerraform)(struct!.ipBlock),
    namespace_selector: cdktf.listMapper(networkPolicySpecEgressToNamespaceSelectorToTerraform)(struct!.namespaceSelector),
    pod_selector: cdktf.listMapper(networkPolicySpecEgressToPodSelectorToTerraform)(struct!.podSelector),
  }
}

export interface NetworkPolicySpecEgress {
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicySpecEgressPorts[];
  /**
  * to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#to NetworkPolicy#to}
  */
  readonly to?: NetworkPolicySpecEgressTo[];
}

function networkPolicySpecEgressToTerraform(struct?: NetworkPolicySpecEgress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ports: cdktf.listMapper(networkPolicySpecEgressPortsToTerraform)(struct!.ports),
    to: cdktf.listMapper(networkPolicySpecEgressToToTerraform)(struct!.to),
  }
}

export interface NetworkPolicySpecIngressFromIpBlock {
  /**
  * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#cidr NetworkPolicy#cidr}
  */
  readonly cidr?: string;
  /**
  * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#except NetworkPolicy#except}
  */
  readonly except?: string[];
}

function networkPolicySpecIngressFromIpBlockToTerraform(struct?: NetworkPolicySpecIngressFromIpBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform)(struct!.except),
  }
}

export interface NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

function networkPolicySpecIngressFromNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecIngressFromNamespaceSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[];
}

function networkPolicySpecIngressFromNamespaceSelectorToTerraform(struct?: NetworkPolicySpecIngressFromNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecIngressFromNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface NetworkPolicySpecIngressFromPodSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

function networkPolicySpecIngressFromPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecIngressFromPodSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[];
}

function networkPolicySpecIngressFromPodSelectorToTerraform(struct?: NetworkPolicySpecIngressFromPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecIngressFromPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface NetworkPolicySpecIngressFrom {
  /**
  * ip_block block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecIngressFromIpBlock[];
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicySpecIngressFromNamespaceSelector[];
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicySpecIngressFromPodSelector[];
}

function networkPolicySpecIngressFromToTerraform(struct?: NetworkPolicySpecIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_block: cdktf.listMapper(networkPolicySpecIngressFromIpBlockToTerraform)(struct!.ipBlock),
    namespace_selector: cdktf.listMapper(networkPolicySpecIngressFromNamespaceSelectorToTerraform)(struct!.namespaceSelector),
    pod_selector: cdktf.listMapper(networkPolicySpecIngressFromPodSelectorToTerraform)(struct!.podSelector),
  }
}

export interface NetworkPolicySpecIngressPorts {
  /**
  * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#port NetworkPolicy#port}
  */
  readonly port?: string;
  /**
  * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

function networkPolicySpecIngressPortsToTerraform(struct?: NetworkPolicySpecIngressPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface NetworkPolicySpecIngress {
  /**
  * from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#from NetworkPolicy#from}
  */
  readonly from?: NetworkPolicySpecIngressFrom[];
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicySpecIngressPorts[];
}

function networkPolicySpecIngressToTerraform(struct?: NetworkPolicySpecIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from: cdktf.listMapper(networkPolicySpecIngressFromToTerraform)(struct!.from),
    ports: cdktf.listMapper(networkPolicySpecIngressPortsToTerraform)(struct!.ports),
  }
}

export interface NetworkPolicySpecPodSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

function networkPolicySpecPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecPodSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecPodSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecPodSelectorMatchExpressions[];
}

function networkPolicySpecPodSelectorToTerraform(struct?: NetworkPolicySpecPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface NetworkPolicySpec {
  /**
  * List of rule types that the NetworkPolicy relates to. Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#policy_types NetworkPolicy#policy_types}
  */
  readonly policyTypes: string[];
  /**
  * egress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#egress NetworkPolicy#egress}
  */
  readonly egress?: NetworkPolicySpecEgress[];
  /**
  * ingress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ingress NetworkPolicy#ingress}
  */
  readonly ingress?: NetworkPolicySpecIngress[];
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector: NetworkPolicySpecPodSelector[];
}

function networkPolicySpecToTerraform(struct?: NetworkPolicySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.policyTypes),
    egress: cdktf.listMapper(networkPolicySpecEgressToTerraform)(struct!.egress),
    ingress: cdktf.listMapper(networkPolicySpecIngressToTerraform)(struct!.ingress),
    pod_selector: cdktf.listMapper(networkPolicySpecPodSelectorToTerraform)(struct!.podSelector),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html kubernetes_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html kubernetes_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: NetworkPolicyMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: NetworkPolicyMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: NetworkPolicySpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: NetworkPolicySpec[]) {
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
      metadata: cdktf.listMapper(networkPolicyMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(networkPolicySpecToTerraform)(this._spec),
    };
  }
}
