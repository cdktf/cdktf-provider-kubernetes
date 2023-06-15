# `kubernetes_network_policy`

Refer to the Terraform Registory for docs: [`kubernetes_network_policy`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy).

# `networkPolicy` Submodule <a name="`networkPolicy` Submodule" id="@cdktf/provider-kubernetes.networkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPolicy <a name="NetworkPolicy" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy kubernetes_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicy(scope: Construct, id: string, config: NetworkPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig">NetworkPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig">NetworkPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.putMetadata"></a>

```typescript
public putMetadata(value: NetworkPolicyMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata">NetworkPolicyMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.putSpec"></a>

```typescript
public putSpec(value: NetworkPolicySpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec">NetworkPolicySpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isConstruct"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

networkPolicy.NetworkPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isTerraformElement"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

networkPolicy.NetworkPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isTerraformResource"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

networkPolicy.NetworkPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference">NetworkPolicyMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference">NetworkPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata">NetworkPolicyMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec">NetworkPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.metadata"></a>

```typescript
public readonly metadata: NetworkPolicyMetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference">NetworkPolicyMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.spec"></a>

```typescript
public readonly spec: NetworkPolicySpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference">NetworkPolicySpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.metadataInput"></a>

```typescript
public readonly metadataInput: NetworkPolicyMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata">NetworkPolicyMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.specInput"></a>

```typescript
public readonly specInput: NetworkPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec">NetworkPolicySpec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPolicyConfig <a name="NetworkPolicyConfig" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicyConfig: networkPolicy.NetworkPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata">NetworkPolicyMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec">NetworkPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#id NetworkPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.metadata"></a>

```typescript
public readonly metadata: NetworkPolicyMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata">NetworkPolicyMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#metadata NetworkPolicy#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.spec"></a>

```typescript
public readonly spec: NetworkPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec">NetworkPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#spec NetworkPolicy#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#id NetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NetworkPolicyMetadata <a name="NetworkPolicyMetadata" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicyMetadata: networkPolicy.NetworkPolicyMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the network policy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the network policy. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.name">name</a></code> | <code>string</code> | Name of the network policy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the network policy must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the network policy that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#annotations NetworkPolicy#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#generate_name NetworkPolicy#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the network policy.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#labels NetworkPolicy#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the network policy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#name NetworkPolicy#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the network policy must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#namespace NetworkPolicy#namespace}

---

### NetworkPolicySpec <a name="NetworkPolicySpec" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpec: networkPolicy.NetworkPolicySpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector">NetworkPolicySpecPodSelector</a></code> | pod_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.policyTypes">policyTypes</a></code> | <code>string[]</code> | List of rule types that the NetworkPolicy relates to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.egress">egress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>[]</code> | egress block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>[]</code> | ingress block. |

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicySpecPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector">NetworkPolicySpecPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}

---

##### `policyTypes`<sup>Required</sup> <a name="policyTypes" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.policyTypes"></a>

```typescript
public readonly policyTypes: string[];
```

- *Type:* string[]

List of rule types that the NetworkPolicy relates to.

Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#policy_types NetworkPolicy#policy_types}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.egress"></a>

```typescript
public readonly egress: IResolvable | NetworkPolicySpecEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>[]

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#egress NetworkPolicy#egress}

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | NetworkPolicySpecIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>[]

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#ingress NetworkPolicy#ingress}

---

### NetworkPolicySpecEgress <a name="NetworkPolicySpecEgress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgress: networkPolicy.NetworkPolicySpecEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress.property.to">to</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>[]</code> | to block. |

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress.property.ports"></a>

```typescript
public readonly ports: IResolvable | NetworkPolicySpecEgressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#ports NetworkPolicy#ports}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress.property.to"></a>

```typescript
public readonly to: IResolvable | NetworkPolicySpecEgressTo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>[]

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#to NetworkPolicy#to}

---

### NetworkPolicySpecEgressPorts <a name="NetworkPolicySpecEgressPorts" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgressPorts: networkPolicy.NetworkPolicySpecEgressPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts.property.port">port</a></code> | <code>string</code> | The port on the given protocol. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts.property.protocol">protocol</a></code> | <code>string</code> | The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The port on the given protocol.

This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#port NetworkPolicy#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#protocol NetworkPolicy#protocol}

---

### NetworkPolicySpecEgressTo <a name="NetworkPolicySpecEgressTo" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgressTo: networkPolicy.NetworkPolicySpecEgressTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock">NetworkPolicySpecEgressToIpBlock</a></code> | ip_block block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector">NetworkPolicySpecEgressToNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector">NetworkPolicySpecEgressToPodSelector</a></code> | pod_selector block. |

---

##### `ipBlock`<sup>Optional</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicySpecEgressToIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock">NetworkPolicySpecEgressToIpBlock</a>

ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}

---

##### `namespaceSelector`<sup>Optional</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicySpecEgressToNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector">NetworkPolicySpecEgressToNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}

---

##### `podSelector`<sup>Optional</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicySpecEgressToPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector">NetworkPolicySpecEgressToPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}

---

### NetworkPolicySpecEgressToIpBlock <a name="NetworkPolicySpecEgressToIpBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgressToIpBlock: networkPolicy.NetworkPolicySpecEgressToIpBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock.property.cidr">cidr</a></code> | <code>string</code> | CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock.property.except">except</a></code> | <code>string[]</code> | Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#cidr NetworkPolicy#cidr}

---

##### `except`<sup>Optional</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#except NetworkPolicy#except}

---

### NetworkPolicySpecEgressToNamespaceSelector <a name="NetworkPolicySpecEgressToNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgressToNamespaceSelector: networkPolicy.NetworkPolicySpecEgressToNamespaceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}

---

### NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions <a name="NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgressToNamespaceSelectorMatchExpressions: networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#key NetworkPolicy#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#operator NetworkPolicy#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#values NetworkPolicy#values}

---

### NetworkPolicySpecEgressToPodSelector <a name="NetworkPolicySpecEgressToPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgressToPodSelector: networkPolicy.NetworkPolicySpecEgressToPodSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicySpecEgressToPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}

---

### NetworkPolicySpecEgressToPodSelectorMatchExpressions <a name="NetworkPolicySpecEgressToPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecEgressToPodSelectorMatchExpressions: networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#key NetworkPolicy#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#operator NetworkPolicy#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#values NetworkPolicy#values}

---

### NetworkPolicySpecIngress <a name="NetworkPolicySpecIngress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngress: networkPolicy.NetworkPolicySpecIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress.property.from">from</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>[]</code> | from block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>[]</code> | ports block. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress.property.from"></a>

```typescript
public readonly from: IResolvable | NetworkPolicySpecIngressFrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>[]

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#from NetworkPolicy#from}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress.property.ports"></a>

```typescript
public readonly ports: IResolvable | NetworkPolicySpecIngressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#ports NetworkPolicy#ports}

---

### NetworkPolicySpecIngressFrom <a name="NetworkPolicySpecIngressFrom" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngressFrom: networkPolicy.NetworkPolicySpecIngressFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock">NetworkPolicySpecIngressFromIpBlock</a></code> | ip_block block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector">NetworkPolicySpecIngressFromNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector">NetworkPolicySpecIngressFromPodSelector</a></code> | pod_selector block. |

---

##### `ipBlock`<sup>Optional</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicySpecIngressFromIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock">NetworkPolicySpecIngressFromIpBlock</a>

ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}

---

##### `namespaceSelector`<sup>Optional</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicySpecIngressFromNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector">NetworkPolicySpecIngressFromNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}

---

##### `podSelector`<sup>Optional</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicySpecIngressFromPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector">NetworkPolicySpecIngressFromPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}

---

### NetworkPolicySpecIngressFromIpBlock <a name="NetworkPolicySpecIngressFromIpBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngressFromIpBlock: networkPolicy.NetworkPolicySpecIngressFromIpBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock.property.cidr">cidr</a></code> | <code>string</code> | CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock.property.except">except</a></code> | <code>string[]</code> | Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#cidr NetworkPolicy#cidr}

---

##### `except`<sup>Optional</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#except NetworkPolicy#except}

---

### NetworkPolicySpecIngressFromNamespaceSelector <a name="NetworkPolicySpecIngressFromNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngressFromNamespaceSelector: networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}

---

### NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions <a name="NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngressFromNamespaceSelectorMatchExpressions: networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#key NetworkPolicy#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#operator NetworkPolicy#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#values NetworkPolicy#values}

---

### NetworkPolicySpecIngressFromPodSelector <a name="NetworkPolicySpecIngressFromPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngressFromPodSelector: networkPolicy.NetworkPolicySpecIngressFromPodSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicySpecIngressFromPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}

---

### NetworkPolicySpecIngressFromPodSelectorMatchExpressions <a name="NetworkPolicySpecIngressFromPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngressFromPodSelectorMatchExpressions: networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#key NetworkPolicy#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#operator NetworkPolicy#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#values NetworkPolicy#values}

---

### NetworkPolicySpecIngressPorts <a name="NetworkPolicySpecIngressPorts" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecIngressPorts: networkPolicy.NetworkPolicySpecIngressPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts.property.port">port</a></code> | <code>string</code> | The port on the given protocol. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts.property.protocol">protocol</a></code> | <code>string</code> | The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The port on the given protocol.

This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#port NetworkPolicy#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#protocol NetworkPolicy#protocol}

---

### NetworkPolicySpecPodSelector <a name="NetworkPolicySpecPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecPodSelector: networkPolicy.NetworkPolicySpecPodSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicySpecPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}

---

### NetworkPolicySpecPodSelectorMatchExpressions <a name="NetworkPolicySpecPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

const networkPolicySpecPodSelectorMatchExpressions: networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#key NetworkPolicy#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#operator NetworkPolicy#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/network_policy#values NetworkPolicy#values}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkPolicyMetadataOutputReference <a name="NetworkPolicyMetadataOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicyMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata">NetworkPolicyMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyMetadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicyMetadata">NetworkPolicyMetadata</a>

---


### NetworkPolicySpecEgressList <a name="NetworkPolicySpecEgressList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>[]

---


### NetworkPolicySpecEgressOutputReference <a name="NetworkPolicySpecEgressOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPorts` <a name="putPorts" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | NetworkPolicySpecEgressPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>[]

---

##### `putTo` <a name="putTo" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.putTo"></a>

```typescript
public putTo(value: IResolvable | NetworkPolicySpecEgressTo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.putTo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>[]

---

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList">NetworkPolicySpecEgressPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.to">to</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList">NetworkPolicySpecEgressToList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.toInput">toInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.ports"></a>

```typescript
public readonly ports: NetworkPolicySpecEgressPortsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList">NetworkPolicySpecEgressPortsList</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.to"></a>

```typescript
public readonly to: NetworkPolicySpecEgressToList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList">NetworkPolicySpecEgressToList</a>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | NetworkPolicySpecEgressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>[]

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.toInput"></a>

```typescript
public readonly toInput: IResolvable | NetworkPolicySpecEgressTo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>

---


### NetworkPolicySpecEgressPortsList <a name="NetworkPolicySpecEgressPortsList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecEgressPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>[]

---


### NetworkPolicySpecEgressPortsOutputReference <a name="NetworkPolicySpecEgressPortsOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressPorts">NetworkPolicySpecEgressPorts</a>

---


### NetworkPolicySpecEgressToIpBlockOutputReference <a name="NetworkPolicySpecEgressToIpBlockOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.resetExcept">resetExcept</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetExcept` <a name="resetExcept" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.resetExcept"></a>

```typescript
public resetExcept(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.exceptInput">exceptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.except">except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock">NetworkPolicySpecEgressToIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `exceptInput`<sup>Optional</sup> <a name="exceptInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.exceptInput"></a>

```typescript
public readonly exceptInput: string[];
```

- *Type:* string[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `except`<sup>Required</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpecEgressToIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock">NetworkPolicySpecEgressToIpBlock</a>

---


### NetworkPolicySpecEgressToList <a name="NetworkPolicySpecEgressToList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecEgressToOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressTo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>[]

---


### NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList <a name="NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>[]

---


### NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference <a name="NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>

---


### NetworkPolicySpecEgressToNamespaceSelectorOutputReference <a name="NetworkPolicySpecEgressToNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector">NetworkPolicySpecEgressToNamespaceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpecEgressToNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector">NetworkPolicySpecEgressToNamespaceSelector</a>

---


### NetworkPolicySpecEgressToOutputReference <a name="NetworkPolicySpecEgressToOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putIpBlock">putIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putNamespaceSelector">putNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putPodSelector">putPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resetIpBlock">resetIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resetNamespaceSelector">resetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resetPodSelector">resetPodSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlock` <a name="putIpBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putIpBlock"></a>

```typescript
public putIpBlock(value: NetworkPolicySpecEgressToIpBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock">NetworkPolicySpecEgressToIpBlock</a>

---

##### `putNamespaceSelector` <a name="putNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putNamespaceSelector"></a>

```typescript
public putNamespaceSelector(value: NetworkPolicySpecEgressToNamespaceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector">NetworkPolicySpecEgressToNamespaceSelector</a>

---

##### `putPodSelector` <a name="putPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putPodSelector"></a>

```typescript
public putPodSelector(value: NetworkPolicySpecEgressToPodSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector">NetworkPolicySpecEgressToPodSelector</a>

---

##### `resetIpBlock` <a name="resetIpBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resetIpBlock"></a>

```typescript
public resetIpBlock(): void
```

##### `resetNamespaceSelector` <a name="resetNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resetNamespaceSelector"></a>

```typescript
public resetNamespaceSelector(): void
```

##### `resetPodSelector` <a name="resetPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.resetPodSelector"></a>

```typescript
public resetPodSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference">NetworkPolicySpecEgressToIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference">NetworkPolicySpecEgressToNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference">NetworkPolicySpecEgressToPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.ipBlockInput">ipBlockInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock">NetworkPolicySpecEgressToIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.namespaceSelectorInput">namespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector">NetworkPolicySpecEgressToNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.podSelectorInput">podSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector">NetworkPolicySpecEgressToPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipBlock`<sup>Required</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicySpecEgressToIpBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlockOutputReference">NetworkPolicySpecEgressToIpBlockOutputReference</a>

---

##### `namespaceSelector`<sup>Required</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicySpecEgressToNamespaceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelectorOutputReference">NetworkPolicySpecEgressToNamespaceSelectorOutputReference</a>

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicySpecEgressToPodSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference">NetworkPolicySpecEgressToPodSelectorOutputReference</a>

---

##### `ipBlockInput`<sup>Optional</sup> <a name="ipBlockInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.ipBlockInput"></a>

```typescript
public readonly ipBlockInput: NetworkPolicySpecEgressToIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToIpBlock">NetworkPolicySpecEgressToIpBlock</a>

---

##### `namespaceSelectorInput`<sup>Optional</sup> <a name="namespaceSelectorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.namespaceSelectorInput"></a>

```typescript
public readonly namespaceSelectorInput: NetworkPolicySpecEgressToNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToNamespaceSelector">NetworkPolicySpecEgressToNamespaceSelector</a>

---

##### `podSelectorInput`<sup>Optional</sup> <a name="podSelectorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.podSelectorInput"></a>

```typescript
public readonly podSelectorInput: NetworkPolicySpecEgressToPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector">NetworkPolicySpecEgressToPodSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressTo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressTo">NetworkPolicySpecEgressTo</a>

---


### NetworkPolicySpecEgressToPodSelectorMatchExpressionsList <a name="NetworkPolicySpecEgressToPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressToPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>[]

---


### NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecEgressToPodSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>

---


### NetworkPolicySpecEgressToPodSelectorOutputReference <a name="NetworkPolicySpecEgressToPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicySpecEgressToPodSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList">NetworkPolicySpecEgressToPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector">NetworkPolicySpecEgressToPodSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicySpecEgressToPodSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressionsList">NetworkPolicySpecEgressToPodSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicySpecEgressToPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorMatchExpressions">NetworkPolicySpecEgressToPodSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpecEgressToPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressToPodSelector">NetworkPolicySpecEgressToPodSelector</a>

---


### NetworkPolicySpecIngressFromIpBlockOutputReference <a name="NetworkPolicySpecIngressFromIpBlockOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.resetExcept">resetExcept</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetExcept` <a name="resetExcept" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.resetExcept"></a>

```typescript
public resetExcept(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.exceptInput">exceptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.except">except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock">NetworkPolicySpecIngressFromIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `exceptInput`<sup>Optional</sup> <a name="exceptInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.exceptInput"></a>

```typescript
public readonly exceptInput: string[];
```

- *Type:* string[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `except`<sup>Required</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpecIngressFromIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock">NetworkPolicySpecIngressFromIpBlock</a>

---


### NetworkPolicySpecIngressFromList <a name="NetworkPolicySpecIngressFromList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecIngressFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressFrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>[]

---


### NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList <a name="NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---


### NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference <a name="NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>

---


### NetworkPolicySpecIngressFromNamespaceSelectorOutputReference <a name="NetworkPolicySpecIngressFromNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector">NetworkPolicySpecIngressFromNamespaceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpecIngressFromNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector">NetworkPolicySpecIngressFromNamespaceSelector</a>

---


### NetworkPolicySpecIngressFromOutputReference <a name="NetworkPolicySpecIngressFromOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putIpBlock">putIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putNamespaceSelector">putNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putPodSelector">putPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resetIpBlock">resetIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resetNamespaceSelector">resetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resetPodSelector">resetPodSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlock` <a name="putIpBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putIpBlock"></a>

```typescript
public putIpBlock(value: NetworkPolicySpecIngressFromIpBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock">NetworkPolicySpecIngressFromIpBlock</a>

---

##### `putNamespaceSelector` <a name="putNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putNamespaceSelector"></a>

```typescript
public putNamespaceSelector(value: NetworkPolicySpecIngressFromNamespaceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector">NetworkPolicySpecIngressFromNamespaceSelector</a>

---

##### `putPodSelector` <a name="putPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putPodSelector"></a>

```typescript
public putPodSelector(value: NetworkPolicySpecIngressFromPodSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector">NetworkPolicySpecIngressFromPodSelector</a>

---

##### `resetIpBlock` <a name="resetIpBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resetIpBlock"></a>

```typescript
public resetIpBlock(): void
```

##### `resetNamespaceSelector` <a name="resetNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resetNamespaceSelector"></a>

```typescript
public resetNamespaceSelector(): void
```

##### `resetPodSelector` <a name="resetPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.resetPodSelector"></a>

```typescript
public resetPodSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference">NetworkPolicySpecIngressFromIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference">NetworkPolicySpecIngressFromNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference">NetworkPolicySpecIngressFromPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.ipBlockInput">ipBlockInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock">NetworkPolicySpecIngressFromIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.namespaceSelectorInput">namespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector">NetworkPolicySpecIngressFromNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.podSelectorInput">podSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector">NetworkPolicySpecIngressFromPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipBlock`<sup>Required</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicySpecIngressFromIpBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlockOutputReference">NetworkPolicySpecIngressFromIpBlockOutputReference</a>

---

##### `namespaceSelector`<sup>Required</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicySpecIngressFromNamespaceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelectorOutputReference">NetworkPolicySpecIngressFromNamespaceSelectorOutputReference</a>

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicySpecIngressFromPodSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference">NetworkPolicySpecIngressFromPodSelectorOutputReference</a>

---

##### `ipBlockInput`<sup>Optional</sup> <a name="ipBlockInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.ipBlockInput"></a>

```typescript
public readonly ipBlockInput: NetworkPolicySpecIngressFromIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromIpBlock">NetworkPolicySpecIngressFromIpBlock</a>

---

##### `namespaceSelectorInput`<sup>Optional</sup> <a name="namespaceSelectorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.namespaceSelectorInput"></a>

```typescript
public readonly namespaceSelectorInput: NetworkPolicySpecIngressFromNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromNamespaceSelector">NetworkPolicySpecIngressFromNamespaceSelector</a>

---

##### `podSelectorInput`<sup>Optional</sup> <a name="podSelectorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.podSelectorInput"></a>

```typescript
public readonly podSelectorInput: NetworkPolicySpecIngressFromPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector">NetworkPolicySpecIngressFromPodSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressFrom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>

---


### NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList <a name="NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressFromPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>[]

---


### NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressFromPodSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>

---


### NetworkPolicySpecIngressFromPodSelectorOutputReference <a name="NetworkPolicySpecIngressFromPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicySpecIngressFromPodSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList">NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector">NetworkPolicySpecIngressFromPodSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList">NetworkPolicySpecIngressFromPodSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicySpecIngressFromPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorMatchExpressions">NetworkPolicySpecIngressFromPodSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpecIngressFromPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromPodSelector">NetworkPolicySpecIngressFromPodSelector</a>

---


### NetworkPolicySpecIngressList <a name="NetworkPolicySpecIngressList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>[]

---


### NetworkPolicySpecIngressOutputReference <a name="NetworkPolicySpecIngressOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.putFrom"></a>

```typescript
public putFrom(value: IResolvable | NetworkPolicySpecIngressFrom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.putFrom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>[]

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | NetworkPolicySpecIngressPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>[]

---

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.from">from</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList">NetworkPolicySpecIngressFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList">NetworkPolicySpecIngressPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.fromInput">fromInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.from"></a>

```typescript
public readonly from: NetworkPolicySpecIngressFromList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFromList">NetworkPolicySpecIngressFromList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.ports"></a>

```typescript
public readonly ports: NetworkPolicySpecIngressPortsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList">NetworkPolicySpecIngressPortsList</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: IResolvable | NetworkPolicySpecIngressFrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressFrom">NetworkPolicySpecIngressFrom</a>[]

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | NetworkPolicySpecIngressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>

---


### NetworkPolicySpecIngressPortsList <a name="NetworkPolicySpecIngressPortsList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecIngressPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>[]

---


### NetworkPolicySpecIngressPortsOutputReference <a name="NetworkPolicySpecIngressPortsOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecIngressPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecIngressPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressPorts">NetworkPolicySpecIngressPorts</a>

---


### NetworkPolicySpecOutputReference <a name="NetworkPolicySpecOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putPodSelector">putPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.resetIngress">resetIngress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgress` <a name="putEgress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putEgress"></a>

```typescript
public putEgress(value: IResolvable | NetworkPolicySpecEgress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putEgress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>[]

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putIngress"></a>

```typescript
public putIngress(value: IResolvable | NetworkPolicySpecIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putIngress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>[]

---

##### `putPodSelector` <a name="putPodSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putPodSelector"></a>

```typescript
public putPodSelector(value: NetworkPolicySpecPodSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector">NetworkPolicySpecPodSelector</a>

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.resetIngress"></a>

```typescript
public resetIngress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList">NetworkPolicySpecEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList">NetworkPolicySpecIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference">NetworkPolicySpecPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.egressInput">egressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.ingressInput">ingressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.podSelectorInput">podSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector">NetworkPolicySpecPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.policyTypesInput">policyTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.policyTypes">policyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec">NetworkPolicySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.egress"></a>

```typescript
public readonly egress: NetworkPolicySpecEgressList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgressList">NetworkPolicySpecEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.ingress"></a>

```typescript
public readonly ingress: NetworkPolicySpecIngressList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngressList">NetworkPolicySpecIngressList</a>

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicySpecPodSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference">NetworkPolicySpecPodSelectorOutputReference</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.egressInput"></a>

```typescript
public readonly egressInput: IResolvable | NetworkPolicySpecEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecEgress">NetworkPolicySpecEgress</a>[]

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.ingressInput"></a>

```typescript
public readonly ingressInput: IResolvable | NetworkPolicySpecIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecIngress">NetworkPolicySpecIngress</a>[]

---

##### `podSelectorInput`<sup>Optional</sup> <a name="podSelectorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.podSelectorInput"></a>

```typescript
public readonly podSelectorInput: NetworkPolicySpecPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector">NetworkPolicySpecPodSelector</a>

---

##### `policyTypesInput`<sup>Optional</sup> <a name="policyTypesInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.policyTypesInput"></a>

```typescript
public readonly policyTypesInput: string[];
```

- *Type:* string[]

---

##### `policyTypes`<sup>Required</sup> <a name="policyTypes" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.policyTypes"></a>

```typescript
public readonly policyTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpec">NetworkPolicySpec</a>

---


### NetworkPolicySpecPodSelectorMatchExpressionsList <a name="NetworkPolicySpecPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicySpecPodSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>[]

---


### NetworkPolicySpecPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicySpecPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicySpecPodSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>

---


### NetworkPolicySpecPodSelectorOutputReference <a name="NetworkPolicySpecPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicy } from '@cdktf/provider-kubernetes'

new networkPolicy.NetworkPolicySpecPodSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicySpecPodSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList">NetworkPolicySpecPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector">NetworkPolicySpecPodSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicySpecPodSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressionsList">NetworkPolicySpecPodSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicySpecPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorMatchExpressions">NetworkPolicySpecPodSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicySpecPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicy.NetworkPolicySpecPodSelector">NetworkPolicySpecPodSelector</a>

---



