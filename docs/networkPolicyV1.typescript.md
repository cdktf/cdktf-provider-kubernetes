# `networkPolicyV1` Submodule <a name="`networkPolicyV1` Submodule" id="@cdktf/provider-kubernetes.networkPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkPolicyV1 <a name="NetworkPolicyV1" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1 kubernetes_network_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1(scope: Construct, id: string, config: NetworkPolicyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config">NetworkPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config">NetworkPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putMetadata"></a>

```typescript
public putMetadata(value: NetworkPolicyV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putSpec"></a>

```typescript
public putSpec(value: NetworkPolicyV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isConstruct"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

networkPolicyV1.NetworkPolicyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformElement"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

networkPolicyV1.NetworkPolicyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformResource"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

networkPolicyV1.NetworkPolicyV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

networkPolicyV1.NetworkPolicyV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkPolicyV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference">NetworkPolicyV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference">NetworkPolicyV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadata"></a>

```typescript
public readonly metadata: NetworkPolicyV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference">NetworkPolicyV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.spec"></a>

```typescript
public readonly spec: NetworkPolicyV1SpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference">NetworkPolicyV1SpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: NetworkPolicyV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.specInput"></a>

```typescript
public readonly specInput: NetworkPolicyV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkPolicyV1Config <a name="NetworkPolicyV1Config" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1Config: networkPolicyV1.NetworkPolicyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#id NetworkPolicyV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.metadata"></a>

```typescript
public readonly metadata: NetworkPolicyV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#metadata NetworkPolicyV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.spec"></a>

```typescript
public readonly spec: NetworkPolicyV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#spec NetworkPolicyV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#id NetworkPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NetworkPolicyV1Metadata <a name="NetworkPolicyV1Metadata" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1Metadata: networkPolicyV1.NetworkPolicyV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the network policy that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the network policy. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the network policy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the network policy must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the network policy that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#annotations NetworkPolicyV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#generate_name NetworkPolicyV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the network policy.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#labels NetworkPolicyV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the network policy, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#name NetworkPolicyV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the network policy must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#namespace NetworkPolicyV1#namespace}

---

### NetworkPolicyV1Spec <a name="NetworkPolicyV1Spec" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1Spec: networkPolicyV1.NetworkPolicyV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a></code> | pod_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.policyTypes">policyTypes</a></code> | <code>string[]</code> | policyTypes is a list of rule types that the NetworkPolicy relates to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.egress">egress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]</code> | egress block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]</code> | ingress block. |

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicyV1SpecPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#pod_selector NetworkPolicyV1#pod_selector}

---

##### `policyTypes`<sup>Required</sup> <a name="policyTypes" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.policyTypes"></a>

```typescript
public readonly policyTypes: string[];
```

- *Type:* string[]

policyTypes is a list of rule types that the NetworkPolicy relates to.

Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#policy_types NetworkPolicyV1#policy_types}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.egress"></a>

```typescript
public readonly egress: IResolvable | NetworkPolicyV1SpecEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

egress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#egress NetworkPolicyV1#egress}

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | NetworkPolicyV1SpecIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#ingress NetworkPolicyV1#ingress}

---

### NetworkPolicyV1SpecEgress <a name="NetworkPolicyV1SpecEgress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgress: networkPolicyV1.NetworkPolicyV1SpecEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]</code> | ports block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.to">to</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]</code> | to block. |

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.ports"></a>

```typescript
public readonly ports: IResolvable | NetworkPolicyV1SpecEgressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#ports NetworkPolicyV1#ports}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress.property.to"></a>

```typescript
public readonly to: IResolvable | NetworkPolicyV1SpecEgressTo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#to NetworkPolicyV1#to}

---

### NetworkPolicyV1SpecEgressPorts <a name="NetworkPolicyV1SpecEgressPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgressPorts: networkPolicyV1.NetworkPolicyV1SpecEgressPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.endPort">endPort</a></code> | <code>number</code> | endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.port">port</a></code> | <code>string</code> | port represents the port on the given protocol. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.protocol">protocol</a></code> | <code>string</code> | protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. |

---

##### `endPort`<sup>Optional</sup> <a name="endPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy.

This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#end_port NetworkPolicyV1#end_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

port represents the port on the given protocol.

This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#port NetworkPolicyV1#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match.

If not specified, this field defaults to TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#protocol NetworkPolicyV1#protocol}

---

### NetworkPolicyV1SpecEgressTo <a name="NetworkPolicyV1SpecEgressTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgressTo: networkPolicyV1.NetworkPolicyV1SpecEgressTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a></code> | ip_block block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a></code> | pod_selector block. |

---

##### `ipBlock`<sup>Optional</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicyV1SpecEgressToIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#ip_block NetworkPolicyV1#ip_block}

---

##### `namespaceSelector`<sup>Optional</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicyV1SpecEgressToNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#namespace_selector NetworkPolicyV1#namespace_selector}

---

##### `podSelector`<sup>Optional</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicyV1SpecEgressToPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#pod_selector NetworkPolicyV1#pod_selector}

---

### NetworkPolicyV1SpecEgressToIpBlock <a name="NetworkPolicyV1SpecEgressToIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgressToIpBlock: networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.cidr">cidr</a></code> | <code>string</code> | cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.except">except</a></code> | <code>string[]</code> | except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#cidr NetworkPolicyV1#cidr}

---

##### `except`<sup>Optional</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#except NetworkPolicyV1#except}

---

### NetworkPolicyV1SpecEgressToNamespaceSelector <a name="NetworkPolicyV1SpecEgressToNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgressToNamespaceSelector: networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions: networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecEgressToPodSelector <a name="NetworkPolicyV1SpecEgressToPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgressToPodSelector: networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions <a name="NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecEgressToPodSelectorMatchExpressions: networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecIngress <a name="NetworkPolicyV1SpecIngress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngress: networkPolicyV1.NetworkPolicyV1SpecIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.from">from</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]</code> | from block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.ports">ports</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]</code> | ports block. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.from"></a>

```typescript
public readonly from: IResolvable | NetworkPolicyV1SpecIngressFrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#from NetworkPolicyV1#from}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress.property.ports"></a>

```typescript
public readonly ports: IResolvable | NetworkPolicyV1SpecIngressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#ports NetworkPolicyV1#ports}

---

### NetworkPolicyV1SpecIngressFrom <a name="NetworkPolicyV1SpecIngressFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngressFrom: networkPolicyV1.NetworkPolicyV1SpecIngressFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a></code> | ip_block block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a></code> | namespace_selector block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a></code> | pod_selector block. |

---

##### `ipBlock`<sup>Optional</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicyV1SpecIngressFromIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

ip_block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#ip_block NetworkPolicyV1#ip_block}

---

##### `namespaceSelector`<sup>Optional</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicyV1SpecIngressFromNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

namespace_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#namespace_selector NetworkPolicyV1#namespace_selector}

---

##### `podSelector`<sup>Optional</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicyV1SpecIngressFromPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

pod_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#pod_selector NetworkPolicyV1#pod_selector}

---

### NetworkPolicyV1SpecIngressFromIpBlock <a name="NetworkPolicyV1SpecIngressFromIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngressFromIpBlock: networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.cidr">cidr</a></code> | <code>string</code> | cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64". |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.except">except</a></code> | <code>string[]</code> | except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#cidr NetworkPolicyV1#cidr}

---

##### `except`<sup>Optional</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#except NetworkPolicyV1#except}

---

### NetworkPolicyV1SpecIngressFromNamespaceSelector <a name="NetworkPolicyV1SpecIngressFromNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngressFromNamespaceSelector: networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions: networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecIngressFromPodSelector <a name="NetworkPolicyV1SpecIngressFromPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngressFromPodSelector: networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions <a name="NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngressFromPodSelectorMatchExpressions: networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

### NetworkPolicyV1SpecIngressPorts <a name="NetworkPolicyV1SpecIngressPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecIngressPorts: networkPolicyV1.NetworkPolicyV1SpecIngressPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.endPort">endPort</a></code> | <code>number</code> | endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.port">port</a></code> | <code>string</code> | port represents the port on the given protocol. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.protocol">protocol</a></code> | <code>string</code> | protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. |

---

##### `endPort`<sup>Optional</sup> <a name="endPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy.

This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#end_port NetworkPolicyV1#end_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

port represents the port on the given protocol.

This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#port NetworkPolicyV1#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match.

If not specified, this field defaults to TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#protocol NetworkPolicyV1#protocol}

---

### NetworkPolicyV1SpecPodSelector <a name="NetworkPolicyV1SpecPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecPodSelector: networkPolicyV1.NetworkPolicyV1SpecPodSelector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchExpressions">matchExpressions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: IResolvable | NetworkPolicyV1SpecPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_expressions NetworkPolicyV1#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#match_labels NetworkPolicyV1#match_labels}

---

### NetworkPolicyV1SpecPodSelectorMatchExpressions <a name="NetworkPolicyV1SpecPodSelectorMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

const networkPolicyV1SpecPodSelectorMatchExpressions: networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.key">key</a></code> | <code>string</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.operator">operator</a></code> | <code>string</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.values">values</a></code> | <code>string[]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#key NetworkPolicyV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#operator NetworkPolicyV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.34.0/docs/resources/network_policy_v1#values NetworkPolicyV1#values}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkPolicyV1MetadataOutputReference <a name="NetworkPolicyV1MetadataOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Metadata">NetworkPolicyV1Metadata</a>

---


### NetworkPolicyV1SpecEgressList <a name="NetworkPolicyV1SpecEgressList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

---


### NetworkPolicyV1SpecEgressOutputReference <a name="NetworkPolicyV1SpecEgressOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPorts` <a name="putPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | NetworkPolicyV1SpecEgressPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

---

##### `putTo` <a name="putTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putTo"></a>

```typescript
public putTo(value: IResolvable | NetworkPolicyV1SpecEgressTo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.putTo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

---

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetTo` <a name="resetTo" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList">NetworkPolicyV1SpecEgressPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.to">to</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList">NetworkPolicyV1SpecEgressToList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.toInput">toInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.ports"></a>

```typescript
public readonly ports: NetworkPolicyV1SpecEgressPortsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList">NetworkPolicyV1SpecEgressPortsList</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.to"></a>

```typescript
public readonly to: NetworkPolicyV1SpecEgressToList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList">NetworkPolicyV1SpecEgressToList</a>

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | NetworkPolicyV1SpecEgressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.toInput"></a>

```typescript
public readonly toInput: IResolvable | NetworkPolicyV1SpecEgressTo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>

---


### NetworkPolicyV1SpecEgressPortsList <a name="NetworkPolicyV1SpecEgressPortsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecEgressPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>[]

---


### NetworkPolicyV1SpecEgressPortsOutputReference <a name="NetworkPolicyV1SpecEgressPortsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetEndPort">resetEndPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPort` <a name="resetEndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetEndPort"></a>

```typescript
public resetEndPort(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPortInput">endPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPort">endPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPortInput`<sup>Optional</sup> <a name="endPortInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPortInput"></a>

```typescript
public readonly endPortInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressPorts">NetworkPolicyV1SpecEgressPorts</a>

---


### NetworkPolicyV1SpecEgressToIpBlockOutputReference <a name="NetworkPolicyV1SpecEgressToIpBlockOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetExcept">resetExcept</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetExcept` <a name="resetExcept" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.resetExcept"></a>

```typescript
public resetExcept(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.exceptInput">exceptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.except">except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `exceptInput`<sup>Optional</sup> <a name="exceptInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.exceptInput"></a>

```typescript
public readonly exceptInput: string[];
```

- *Type:* string[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `except`<sup>Required</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1SpecEgressToIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

---


### NetworkPolicyV1SpecEgressToList <a name="NetworkPolicyV1SpecEgressToList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecEgressToOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressTo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>[]

---


### NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference <a name="NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecEgressToNamespaceSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1SpecEgressToNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

---


### NetworkPolicyV1SpecEgressToOutputReference <a name="NetworkPolicyV1SpecEgressToOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putIpBlock">putIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putNamespaceSelector">putNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putPodSelector">putPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetIpBlock">resetIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetNamespaceSelector">resetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetPodSelector">resetPodSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlock` <a name="putIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putIpBlock"></a>

```typescript
public putIpBlock(value: NetworkPolicyV1SpecEgressToIpBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

---

##### `putNamespaceSelector` <a name="putNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putNamespaceSelector"></a>

```typescript
public putNamespaceSelector(value: NetworkPolicyV1SpecEgressToNamespaceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

---

##### `putPodSelector` <a name="putPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putPodSelector"></a>

```typescript
public putPodSelector(value: NetworkPolicyV1SpecEgressToPodSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

---

##### `resetIpBlock` <a name="resetIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetIpBlock"></a>

```typescript
public resetIpBlock(): void
```

##### `resetNamespaceSelector` <a name="resetNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetNamespaceSelector"></a>

```typescript
public resetNamespaceSelector(): void
```

##### `resetPodSelector` <a name="resetPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.resetPodSelector"></a>

```typescript
public resetPodSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference">NetworkPolicyV1SpecEgressToIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference">NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference">NetworkPolicyV1SpecEgressToPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlockInput">ipBlockInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelectorInput">namespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelectorInput">podSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipBlock`<sup>Required</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicyV1SpecEgressToIpBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlockOutputReference">NetworkPolicyV1SpecEgressToIpBlockOutputReference</a>

---

##### `namespaceSelector`<sup>Required</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference">NetworkPolicyV1SpecEgressToNamespaceSelectorOutputReference</a>

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicyV1SpecEgressToPodSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference">NetworkPolicyV1SpecEgressToPodSelectorOutputReference</a>

---

##### `ipBlockInput`<sup>Optional</sup> <a name="ipBlockInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.ipBlockInput"></a>

```typescript
public readonly ipBlockInput: NetworkPolicyV1SpecEgressToIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToIpBlock">NetworkPolicyV1SpecEgressToIpBlock</a>

---

##### `namespaceSelectorInput`<sup>Optional</sup> <a name="namespaceSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.namespaceSelectorInput"></a>

```typescript
public readonly namespaceSelectorInput: NetworkPolicyV1SpecEgressToNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToNamespaceSelector">NetworkPolicyV1SpecEgressToNamespaceSelector</a>

---

##### `podSelectorInput`<sup>Optional</sup> <a name="podSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.podSelectorInput"></a>

```typescript
public readonly podSelectorInput: NetworkPolicyV1SpecEgressToPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressTo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressTo">NetworkPolicyV1SpecEgressTo</a>

---


### NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecEgressToPodSelectorOutputReference <a name="NetworkPolicyV1SpecEgressToPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions">NetworkPolicyV1SpecEgressToPodSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1SpecEgressToPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressToPodSelector">NetworkPolicyV1SpecEgressToPodSelector</a>

---


### NetworkPolicyV1SpecIngressFromIpBlockOutputReference <a name="NetworkPolicyV1SpecIngressFromIpBlockOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetExcept">resetExcept</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetExcept` <a name="resetExcept" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.resetExcept"></a>

```typescript
public resetExcept(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.exceptInput">exceptInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.except">except</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `exceptInput`<sup>Optional</sup> <a name="exceptInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.exceptInput"></a>

```typescript
public readonly exceptInput: string[];
```

- *Type:* string[]

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `except`<sup>Required</sup> <a name="except" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.except"></a>

```typescript
public readonly except: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1SpecIngressFromIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

---


### NetworkPolicyV1SpecIngressFromList <a name="NetworkPolicyV1SpecIngressFromList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecIngressFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressFrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

---


### NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference <a name="NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromNamespaceSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1SpecIngressFromNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

---


### NetworkPolicyV1SpecIngressFromOutputReference <a name="NetworkPolicyV1SpecIngressFromOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putIpBlock">putIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putNamespaceSelector">putNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putPodSelector">putPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetIpBlock">resetIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetNamespaceSelector">resetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetPodSelector">resetPodSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpBlock` <a name="putIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putIpBlock"></a>

```typescript
public putIpBlock(value: NetworkPolicyV1SpecIngressFromIpBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putIpBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

---

##### `putNamespaceSelector` <a name="putNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putNamespaceSelector"></a>

```typescript
public putNamespaceSelector(value: NetworkPolicyV1SpecIngressFromNamespaceSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

---

##### `putPodSelector` <a name="putPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putPodSelector"></a>

```typescript
public putPodSelector(value: NetworkPolicyV1SpecIngressFromPodSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

---

##### `resetIpBlock` <a name="resetIpBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetIpBlock"></a>

```typescript
public resetIpBlock(): void
```

##### `resetNamespaceSelector` <a name="resetNamespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetNamespaceSelector"></a>

```typescript
public resetNamespaceSelector(): void
```

##### `resetPodSelector` <a name="resetPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.resetPodSelector"></a>

```typescript
public resetPodSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlock">ipBlock</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference">NetworkPolicyV1SpecIngressFromIpBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelector">namespaceSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference">NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference">NetworkPolicyV1SpecIngressFromPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlockInput">ipBlockInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelectorInput">namespaceSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelectorInput">podSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipBlock`<sup>Required</sup> <a name="ipBlock" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlock"></a>

```typescript
public readonly ipBlock: NetworkPolicyV1SpecIngressFromIpBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlockOutputReference">NetworkPolicyV1SpecIngressFromIpBlockOutputReference</a>

---

##### `namespaceSelector`<sup>Required</sup> <a name="namespaceSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelector"></a>

```typescript
public readonly namespaceSelector: NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference">NetworkPolicyV1SpecIngressFromNamespaceSelectorOutputReference</a>

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicyV1SpecIngressFromPodSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference">NetworkPolicyV1SpecIngressFromPodSelectorOutputReference</a>

---

##### `ipBlockInput`<sup>Optional</sup> <a name="ipBlockInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.ipBlockInput"></a>

```typescript
public readonly ipBlockInput: NetworkPolicyV1SpecIngressFromIpBlock;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromIpBlock">NetworkPolicyV1SpecIngressFromIpBlock</a>

---

##### `namespaceSelectorInput`<sup>Optional</sup> <a name="namespaceSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.namespaceSelectorInput"></a>

```typescript
public readonly namespaceSelectorInput: NetworkPolicyV1SpecIngressFromNamespaceSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromNamespaceSelector">NetworkPolicyV1SpecIngressFromNamespaceSelector</a>

---

##### `podSelectorInput`<sup>Optional</sup> <a name="podSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.podSelectorInput"></a>

```typescript
public readonly podSelectorInput: NetworkPolicyV1SpecIngressFromPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressFrom;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>

---


### NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecIngressFromPodSelectorOutputReference <a name="NetworkPolicyV1SpecIngressFromPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions">NetworkPolicyV1SpecIngressFromPodSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1SpecIngressFromPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromPodSelector">NetworkPolicyV1SpecIngressFromPodSelector</a>

---


### NetworkPolicyV1SpecIngressList <a name="NetworkPolicyV1SpecIngressList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

---


### NetworkPolicyV1SpecIngressOutputReference <a name="NetworkPolicyV1SpecIngressOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putFrom"></a>

```typescript
public putFrom(value: IResolvable | NetworkPolicyV1SpecIngressFrom[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putFrom.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

---

##### `putPorts` <a name="putPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putPorts"></a>

```typescript
public putPorts(value: IResolvable | NetworkPolicyV1SpecIngressPorts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

---

##### `resetFrom` <a name="resetFrom" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.from">from</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList">NetworkPolicyV1SpecIngressFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList">NetworkPolicyV1SpecIngressPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fromInput">fromInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.portsInput">portsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.from"></a>

```typescript
public readonly from: NetworkPolicyV1SpecIngressFromList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFromList">NetworkPolicyV1SpecIngressFromList</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.ports"></a>

```typescript
public readonly ports: NetworkPolicyV1SpecIngressPortsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList">NetworkPolicyV1SpecIngressPortsList</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: IResolvable | NetworkPolicyV1SpecIngressFrom[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressFrom">NetworkPolicyV1SpecIngressFrom</a>[]

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: IResolvable | NetworkPolicyV1SpecIngressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>

---


### NetworkPolicyV1SpecIngressPortsList <a name="NetworkPolicyV1SpecIngressPortsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressPortsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecIngressPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressPorts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>[]

---


### NetworkPolicyV1SpecIngressPortsOutputReference <a name="NetworkPolicyV1SpecIngressPortsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetEndPort">resetEndPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndPort` <a name="resetEndPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetEndPort"></a>

```typescript
public resetEndPort(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPortInput">endPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPort">endPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endPortInput`<sup>Optional</sup> <a name="endPortInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPortInput"></a>

```typescript
public readonly endPortInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `endPort`<sup>Required</sup> <a name="endPort" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.endPort"></a>

```typescript
public readonly endPort: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecIngressPorts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressPorts">NetworkPolicyV1SpecIngressPorts</a>

---


### NetworkPolicyV1SpecOutputReference <a name="NetworkPolicyV1SpecOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putPodSelector">putPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetIngress">resetIngress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgress` <a name="putEgress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putEgress"></a>

```typescript
public putEgress(value: IResolvable | NetworkPolicyV1SpecEgress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putEgress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putIngress"></a>

```typescript
public putIngress(value: IResolvable | NetworkPolicyV1SpecIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putIngress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

---

##### `putPodSelector` <a name="putPodSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putPodSelector"></a>

```typescript
public putPodSelector(value: NetworkPolicyV1SpecPodSelector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.putPodSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.resetIngress"></a>

```typescript
public resetIngress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList">NetworkPolicyV1SpecEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList">NetworkPolicyV1SpecIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelector">podSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference">NetworkPolicyV1SpecPodSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egressInput">egressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingressInput">ingressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelectorInput">podSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypesInput">policyTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypes">policyTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egress"></a>

```typescript
public readonly egress: NetworkPolicyV1SpecEgressList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgressList">NetworkPolicyV1SpecEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingress"></a>

```typescript
public readonly ingress: NetworkPolicyV1SpecIngressList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngressList">NetworkPolicyV1SpecIngressList</a>

---

##### `podSelector`<sup>Required</sup> <a name="podSelector" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelector"></a>

```typescript
public readonly podSelector: NetworkPolicyV1SpecPodSelectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference">NetworkPolicyV1SpecPodSelectorOutputReference</a>

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.egressInput"></a>

```typescript
public readonly egressInput: IResolvable | NetworkPolicyV1SpecEgress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecEgress">NetworkPolicyV1SpecEgress</a>[]

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.ingressInput"></a>

```typescript
public readonly ingressInput: IResolvable | NetworkPolicyV1SpecIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecIngress">NetworkPolicyV1SpecIngress</a>[]

---

##### `podSelectorInput`<sup>Optional</sup> <a name="podSelectorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.podSelectorInput"></a>

```typescript
public readonly podSelectorInput: NetworkPolicyV1SpecPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

---

##### `policyTypesInput`<sup>Optional</sup> <a name="policyTypesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypesInput"></a>

```typescript
public readonly policyTypesInput: string[];
```

- *Type:* string[]

---

##### `policyTypes`<sup>Required</sup> <a name="policyTypes" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.policyTypes"></a>

```typescript
public readonly policyTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1Spec">NetworkPolicyV1Spec</a>

---


### NetworkPolicyV1SpecPodSelectorMatchExpressionsList <a name="NetworkPolicyV1SpecPodSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.get"></a>

```typescript
public get(index: number): NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

---


### NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference <a name="NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkPolicyV1SpecPodSelectorMatchExpressions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>

---


### NetworkPolicyV1SpecPodSelectorOutputReference <a name="NetworkPolicyV1SpecPodSelectorOutputReference" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer"></a>

```typescript
import { networkPolicyV1 } from '@cdktf/provider-kubernetes'

new networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.putMatchExpressions"></a>

```typescript
public putMatchExpressions(value: IResolvable | NetworkPolicyV1SpecPodSelectorMatchExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchExpressions"></a>

```typescript
public resetMatchExpressions(): void
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.resetMatchLabels"></a>

```typescript
public resetMatchLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList">NetworkPolicyV1SpecPodSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressions"></a>

```typescript
public readonly matchExpressions: NetworkPolicyV1SpecPodSelectorMatchExpressionsList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressionsList">NetworkPolicyV1SpecPodSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchExpressionsInput"></a>

```typescript
public readonly matchExpressionsInput: IResolvable | NetworkPolicyV1SpecPodSelectorMatchExpressions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorMatchExpressions">NetworkPolicyV1SpecPodSelectorMatchExpressions</a>[]

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabelsInput"></a>

```typescript
public readonly matchLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.matchLabels"></a>

```typescript
public readonly matchLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkPolicyV1SpecPodSelector;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.networkPolicyV1.NetworkPolicyV1SpecPodSelector">NetworkPolicyV1SpecPodSelector</a>

---



