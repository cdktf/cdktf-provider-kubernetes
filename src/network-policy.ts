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
  readonly metadata: NetworkPolicyMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#spec NetworkPolicy#spec}
  */
  readonly spec: NetworkPolicySpec;
}
export interface NetworkPolicyMetadata {
  /**
  * An unstructured key value map stored with the network policy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#annotations NetworkPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
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
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
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

function networkPolicyMetadataToTerraform(struct?: NetworkPolicyMetadataOutputReference | NetworkPolicyMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class NetworkPolicyMetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function networkPolicySpecEgressToIpBlockToTerraform(struct?: NetworkPolicySpecEgressToIpBlockOutputReference | NetworkPolicySpecEgressToIpBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform)(struct!.except),
  }
}

export class NetworkPolicySpecEgressToIpBlockOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string | undefined; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string | undefined) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[] | undefined; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[] | undefined) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[];
}

function networkPolicySpecEgressToNamespaceSelectorToTerraform(struct?: NetworkPolicySpecEgressToNamespaceSelectorOutputReference | NetworkPolicySpecEgressToNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecEgressToNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecEgressToNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecEgressToPodSelectorMatchExpressions[];
}

function networkPolicySpecEgressToPodSelectorToTerraform(struct?: NetworkPolicySpecEgressToPodSelectorOutputReference | NetworkPolicySpecEgressToPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecEgressToPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecEgressToPodSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecEgressToPodSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecEgressToPodSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
  }
}
export interface NetworkPolicySpecEgressTo {
  /**
  * ip_block block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecEgressToIpBlock;
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicySpecEgressToNamespaceSelector;
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicySpecEgressToPodSelector;
}

function networkPolicySpecEgressToToTerraform(struct?: NetworkPolicySpecEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: networkPolicySpecEgressToIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: networkPolicySpecEgressToNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicySpecEgressToPodSelectorToTerraform(struct!.podSelector),
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function networkPolicySpecIngressFromIpBlockToTerraform(struct?: NetworkPolicySpecIngressFromIpBlockOutputReference | NetworkPolicySpecIngressFromIpBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform)(struct!.except),
  }
}

export class NetworkPolicySpecIngressFromIpBlockOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string | undefined; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string | undefined) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[] | undefined; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[] | undefined) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[];
}

function networkPolicySpecIngressFromNamespaceSelectorToTerraform(struct?: NetworkPolicySpecIngressFromNamespaceSelectorOutputReference | NetworkPolicySpecIngressFromNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecIngressFromNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecIngressFromNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[];
}

function networkPolicySpecIngressFromPodSelectorToTerraform(struct?: NetworkPolicySpecIngressFromPodSelectorOutputReference | NetworkPolicySpecIngressFromPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecIngressFromPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecIngressFromPodSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
  }
}
export interface NetworkPolicySpecIngressFrom {
  /**
  * ip_block block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecIngressFromIpBlock;
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicySpecIngressFromNamespaceSelector;
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicySpecIngressFromPodSelector;
}

function networkPolicySpecIngressFromToTerraform(struct?: NetworkPolicySpecIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: networkPolicySpecIngressFromIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: networkPolicySpecIngressFromNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicySpecIngressFromPodSelectorToTerraform(struct!.podSelector),
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecPodSelectorMatchExpressions[];
}

function networkPolicySpecPodSelectorToTerraform(struct?: NetworkPolicySpecPodSelectorOutputReference | NetworkPolicySpecPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecPodSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecPodSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecPodSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
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
  readonly podSelector: NetworkPolicySpecPodSelector;
}

function networkPolicySpecToTerraform(struct?: NetworkPolicySpecOutputReference | NetworkPolicySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.policyTypes),
    egress: cdktf.listMapper(networkPolicySpecEgressToTerraform)(struct!.egress),
    ingress: cdktf.listMapper(networkPolicySpecIngressToTerraform)(struct!.ingress),
    pod_selector: networkPolicySpecPodSelectorToTerraform(struct!.podSelector),
  }
}

export class NetworkPolicySpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // policy_types - computed: false, optional: false, required: true
  private _policyTypes?: string[]; 
  public get policyTypes() {
    return this.getListAttribute('policy_types');
  }
  public set policyTypes(value: string[]) {
    this._policyTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypesInput() {
    return this._policyTypes
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: NetworkPolicySpecEgress[] | undefined; 
  public get egress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: NetworkPolicySpecEgress[] | undefined) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: NetworkPolicySpecIngress[] | undefined; 
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: NetworkPolicySpecIngress[] | undefined) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector?: NetworkPolicySpecPodSelector; 
  private __podSelectorOutput = new NetworkPolicySpecPodSelectorOutputReference(this as any, "pod_selector", true);
  public get podSelector() {
    return this.__podSelectorOutput;
  }
  public putPodSelector(value: NetworkPolicySpecPodSelector) {
    this._podSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html kubernetes_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_network_policy";

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
  private _metadata?: NetworkPolicyMetadata; 
  private __metadataOutput = new NetworkPolicyMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: NetworkPolicyMetadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: NetworkPolicySpec; 
  private __specOutput = new NetworkPolicySpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: NetworkPolicySpec) {
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
      metadata: networkPolicyMetadataToTerraform(this._metadata),
      spec: networkPolicySpecToTerraform(this._spec),
    };
  }
}
