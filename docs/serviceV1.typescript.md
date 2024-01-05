# `serviceV1` Submodule <a name="`serviceV1` Submodule" id="@cdktf/provider-kubernetes.serviceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceV1 <a name="ServiceV1" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1 kubernetes_service_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1(scope: Construct, id: string, config: ServiceV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config">ServiceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config">ServiceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer">resetWaitForLoadBalancer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata"></a>

```typescript
public putMetadata(value: ServiceV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec"></a>

```typescript
public putSpec(value: ServiceV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForLoadBalancer` <a name="resetWaitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer"></a>

```typescript
public resetWaitForLoadBalancer(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

serviceV1.ServiceV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

serviceV1.ServiceV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

serviceV1.ServiceV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

serviceV1.ServiceV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status">status</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput">waitForLoadBalancerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata"></a>

```typescript
public readonly metadata: ServiceV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec"></a>

```typescript
public readonly spec: ServiceV1SpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status"></a>

```typescript
public readonly status: ServiceV1StatusList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: ServiceV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput"></a>

```typescript
public readonly specInput: ServiceV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServiceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

---

##### `waitForLoadBalancerInput`<sup>Optional</sup> <a name="waitForLoadBalancerInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput"></a>

```typescript
public readonly waitForLoadBalancerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `waitForLoadBalancer`<sup>Required</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer"></a>

```typescript
public readonly waitForLoadBalancer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceV1Config <a name="ServiceV1Config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1Config: serviceV1.ServiceV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#id ServiceV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata"></a>

```typescript
public readonly metadata: ServiceV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#metadata ServiceV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec"></a>

```typescript
public readonly spec: ServiceV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#spec ServiceV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#id ServiceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#timeouts ServiceV1#timeouts}

---

##### `waitForLoadBalancer`<sup>Optional</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer"></a>

```typescript
public readonly waitForLoadBalancer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#wait_for_load_balancer ServiceV1#wait_for_load_balancer}

---

### ServiceV1Metadata <a name="ServiceV1Metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1Metadata: serviceV1.ServiceV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the service must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#annotations ServiceV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#generate_name ServiceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#labels ServiceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#name ServiceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#namespace ServiceV1#namespace}

---

### ServiceV1Spec <a name="ServiceV1Spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1Spec: serviceV1.ServiceV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts">allocateLoadBalancerNodePorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp">clusterIp</a></code> | <code>string</code> | The IP address of the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps">clusterIps</a></code> | <code>string[]</code> | List of IP addresses assigned to this service, and are usually assigned randomly. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps">externalIps</a></code> | <code>string[]</code> | A list of IP addresses for which nodes in the cluster will also accept traffic for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName">externalName</a></code> | <code>string</code> | The external reference that kubedns or equivalent will return as a CNAME record for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy">externalTrafficPolicy</a></code> | <code>string</code> | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort">healthCheckNodePort</a></code> | <code>number</code> | Specifies the Healthcheck NodePort for the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy">internalTrafficPolicy</a></code> | <code>string</code> | Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies">ipFamilies</a></code> | <code>string[]</code> | IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy">ipFamilyPolicy</a></code> | <code>string</code> | IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass">loadBalancerClass</a></code> | <code>string</code> | The class of the load balancer implementation this Service belongs to. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp">loadBalancerIp</a></code> | <code>string</code> | Only applies to `type = LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges">loadBalancerSourceRanges</a></code> | <code>string[]</code> | If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port">port</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>[]</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses">publishNotReadyAddresses</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector">selector</a></code> | <code>{[ key: string ]: string}</code> | Route service traffic to pods with label keys and values matching this selector. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig">sessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | session_affinity_config block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type">type</a></code> | <code>string</code> | Determines how the service is exposed. |

---

##### `allocateLoadBalancerNodePorts`<sup>Optional</sup> <a name="allocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts"></a>

```typescript
public readonly allocateLoadBalancerNodePorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#allocate_load_balancer_node_ports ServiceV1#allocate_load_balancer_node_ports}

---

##### `clusterIp`<sup>Optional</sup> <a name="clusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp"></a>

```typescript
public readonly clusterIp: string;
```

- *Type:* string

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#cluster_ip ServiceV1#cluster_ip}

---

##### `clusterIps`<sup>Optional</sup> <a name="clusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps"></a>

```typescript
public readonly clusterIps: string[];
```

- *Type:* string[]

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#cluster_ips ServiceV1#cluster_ips}

---

##### `externalIps`<sup>Optional</sup> <a name="externalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps"></a>

```typescript
public readonly externalIps: string[];
```

- *Type:* string[]

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#external_ips ServiceV1#external_ips}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#external_name ServiceV1#external_name}

---

##### `externalTrafficPolicy`<sup>Optional</sup> <a name="externalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy"></a>

```typescript
public readonly externalTrafficPolicy: string;
```

- *Type:* string

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#external_traffic_policy ServiceV1#external_traffic_policy}

---

##### `healthCheckNodePort`<sup>Optional</sup> <a name="healthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort"></a>

```typescript
public readonly healthCheckNodePort: number;
```

- *Type:* number

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#health_check_node_port ServiceV1#health_check_node_port}

---

##### `internalTrafficPolicy`<sup>Optional</sup> <a name="internalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy"></a>

```typescript
public readonly internalTrafficPolicy: string;
```

- *Type:* string

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#internal_traffic_policy ServiceV1#internal_traffic_policy}

---

##### `ipFamilies`<sup>Optional</sup> <a name="ipFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies"></a>

```typescript
public readonly ipFamilies: string[];
```

- *Type:* string[]

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#ip_families ServiceV1#ip_families}

---

##### `ipFamilyPolicy`<sup>Optional</sup> <a name="ipFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy"></a>

```typescript
public readonly ipFamilyPolicy: string;
```

- *Type:* string

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#ip_family_policy ServiceV1#ip_family_policy}

---

##### `loadBalancerClass`<sup>Optional</sup> <a name="loadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass"></a>

```typescript
public readonly loadBalancerClass: string;
```

- *Type:* string

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#load_balancer_class ServiceV1#load_balancer_class}

---

##### `loadBalancerIp`<sup>Optional</sup> <a name="loadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp"></a>

```typescript
public readonly loadBalancerIp: string;
```

- *Type:* string

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#load_balancer_ip ServiceV1#load_balancer_ip}

---

##### `loadBalancerSourceRanges`<sup>Optional</sup> <a name="loadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges"></a>

```typescript
public readonly loadBalancerSourceRanges: string[];
```

- *Type:* string[]

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#load_balancer_source_ranges ServiceV1#load_balancer_source_ranges}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port"></a>

```typescript
public readonly port: IResolvable | ServiceV1SpecPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>[]

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#port ServiceV1#port}

---

##### `publishNotReadyAddresses`<sup>Optional</sup> <a name="publishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses"></a>

```typescript
public readonly publishNotReadyAddresses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#publish_not_ready_addresses ServiceV1#publish_not_ready_addresses}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector"></a>

```typescript
public readonly selector: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#selector ServiceV1#selector}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#session_affinity ServiceV1#session_affinity}

---

##### `sessionAffinityConfig`<sup>Optional</sup> <a name="sessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig"></a>

```typescript
public readonly sessionAffinityConfig: ServiceV1SpecSessionAffinityConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#session_affinity_config ServiceV1#session_affinity_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#type ServiceV1#type}

---

### ServiceV1SpecPort <a name="ServiceV1SpecPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1SpecPort: serviceV1.ServiceV1SpecPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port">port</a></code> | <code>number</code> | The port that will be exposed by this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol">appProtocol</a></code> | <code>string</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name">name</a></code> | <code>string</code> | The name of this port within the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort">nodePort</a></code> | <code>number</code> | The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol">protocol</a></code> | <code>string</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort">targetPort</a></code> | <code>string</code> | Number or name of the port to access on the pods targeted by the service. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port that will be exposed by this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#port ServiceV1#port}

---

##### `appProtocol`<sup>Optional</sup> <a name="appProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol"></a>

```typescript
public readonly appProtocol: string;
```

- *Type:* string

The application protocol for this port.

This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#app_protocol ServiceV1#app_protocol}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this port within the service.

All ports within the service must have unique names. Optional if only one ServicePort is defined on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#name ServiceV1#name}

---

##### `nodePort`<sup>Optional</sup> <a name="nodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort"></a>

```typescript
public readonly nodePort: number;
```

- *Type:* number

The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`.

Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the `type` of this service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#node_port ServiceV1#node_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#protocol ServiceV1#protocol}

---

##### `targetPort`<sup>Optional</sup> <a name="targetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort"></a>

```typescript
public readonly targetPort: string;
```

- *Type:* string

Number or name of the port to access on the pods targeted by the service.

Number must be in the range 1 to 65535. This field is ignored for services with `cluster_ip = "None"`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#target_port ServiceV1#target_port}

---

### ServiceV1SpecSessionAffinityConfig <a name="ServiceV1SpecSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1SpecSessionAffinityConfig: serviceV1.ServiceV1SpecSessionAffinityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp">clientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | client_ip block. |

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp"></a>

```typescript
public readonly clientIp: ServiceV1SpecSessionAffinityConfigClientIp;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#client_ip ServiceV1#client_ip}

---

### ServiceV1SpecSessionAffinityConfigClientIp <a name="ServiceV1SpecSessionAffinityConfigClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1SpecSessionAffinityConfigClientIp: serviceV1.ServiceV1SpecSessionAffinityConfigClientIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Specifies the seconds of `ClientIP` type session sticky time. |

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#timeout_seconds ServiceV1#timeout_seconds}

---

### ServiceV1Status <a name="ServiceV1Status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1Status: serviceV1.ServiceV1Status = { ... }
```


### ServiceV1StatusLoadBalancer <a name="ServiceV1StatusLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1StatusLoadBalancer: serviceV1.ServiceV1StatusLoadBalancer = { ... }
```


### ServiceV1StatusLoadBalancerIngress <a name="ServiceV1StatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1StatusLoadBalancerIngress: serviceV1.ServiceV1StatusLoadBalancerIngress = { ... }
```


### ServiceV1Timeouts <a name="ServiceV1Timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

const serviceV1Timeouts: serviceV1.ServiceV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#create ServiceV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/service_v1#create ServiceV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceV1MetadataOutputReference <a name="ServiceV1MetadataOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---


### ServiceV1SpecOutputReference <a name="ServiceV1SpecOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort">putPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig">putSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts">resetAllocateLoadBalancerNodePorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp">resetClusterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps">resetClusterIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps">resetExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy">resetExternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort">resetHealthCheckNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy">resetInternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies">resetIpFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy">resetIpFamilyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass">resetLoadBalancerClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp">resetLoadBalancerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges">resetLoadBalancerSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses">resetPublishNotReadyAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig">resetSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPort` <a name="putPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort"></a>

```typescript
public putPort(value: IResolvable | ServiceV1SpecPort[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>[]

---

##### `putSessionAffinityConfig` <a name="putSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig"></a>

```typescript
public putSessionAffinityConfig(value: ServiceV1SpecSessionAffinityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---

##### `resetAllocateLoadBalancerNodePorts` <a name="resetAllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts"></a>

```typescript
public resetAllocateLoadBalancerNodePorts(): void
```

##### `resetClusterIp` <a name="resetClusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp"></a>

```typescript
public resetClusterIp(): void
```

##### `resetClusterIps` <a name="resetClusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps"></a>

```typescript
public resetClusterIps(): void
```

##### `resetExternalIps` <a name="resetExternalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps"></a>

```typescript
public resetExternalIps(): void
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName"></a>

```typescript
public resetExternalName(): void
```

##### `resetExternalTrafficPolicy` <a name="resetExternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy"></a>

```typescript
public resetExternalTrafficPolicy(): void
```

##### `resetHealthCheckNodePort` <a name="resetHealthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort"></a>

```typescript
public resetHealthCheckNodePort(): void
```

##### `resetInternalTrafficPolicy` <a name="resetInternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy"></a>

```typescript
public resetInternalTrafficPolicy(): void
```

##### `resetIpFamilies` <a name="resetIpFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies"></a>

```typescript
public resetIpFamilies(): void
```

##### `resetIpFamilyPolicy` <a name="resetIpFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy"></a>

```typescript
public resetIpFamilyPolicy(): void
```

##### `resetLoadBalancerClass` <a name="resetLoadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass"></a>

```typescript
public resetLoadBalancerClass(): void
```

##### `resetLoadBalancerIp` <a name="resetLoadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp"></a>

```typescript
public resetLoadBalancerIp(): void
```

##### `resetLoadBalancerSourceRanges` <a name="resetLoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges"></a>

```typescript
public resetLoadBalancerSourceRanges(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPublishNotReadyAddresses` <a name="resetPublishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses"></a>

```typescript
public resetPublishNotReadyAddresses(): void
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector"></a>

```typescript
public resetSelector(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetSessionAffinityConfig` <a name="resetSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig"></a>

```typescript
public resetSessionAffinityConfig(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig">sessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput">allocateLoadBalancerNodePortsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput">clusterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput">clusterIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput">externalIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput">externalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput">externalTrafficPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput">healthCheckNodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput">internalTrafficPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput">ipFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput">ipFamilyPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput">loadBalancerClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput">loadBalancerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput">loadBalancerSourceRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput">portInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput">publishNotReadyAddressesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput">selectorInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput">sessionAffinityConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts">allocateLoadBalancerNodePorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp">clusterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps">clusterIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps">externalIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName">externalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy">externalTrafficPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort">healthCheckNodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy">internalTrafficPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies">ipFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy">ipFamilyPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass">loadBalancerClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp">loadBalancerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges">loadBalancerSourceRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses">publishNotReadyAddresses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector">selector</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port"></a>

```typescript
public readonly port: ServiceV1SpecPortList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a>

---

##### `sessionAffinityConfig`<sup>Required</sup> <a name="sessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig"></a>

```typescript
public readonly sessionAffinityConfig: ServiceV1SpecSessionAffinityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a>

---

##### `allocateLoadBalancerNodePortsInput`<sup>Optional</sup> <a name="allocateLoadBalancerNodePortsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput"></a>

```typescript
public readonly allocateLoadBalancerNodePortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIpInput`<sup>Optional</sup> <a name="clusterIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput"></a>

```typescript
public readonly clusterIpInput: string;
```

- *Type:* string

---

##### `clusterIpsInput`<sup>Optional</sup> <a name="clusterIpsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput"></a>

```typescript
public readonly clusterIpsInput: string[];
```

- *Type:* string[]

---

##### `externalIpsInput`<sup>Optional</sup> <a name="externalIpsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput"></a>

```typescript
public readonly externalIpsInput: string[];
```

- *Type:* string[]

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput"></a>

```typescript
public readonly externalNameInput: string;
```

- *Type:* string

---

##### `externalTrafficPolicyInput`<sup>Optional</sup> <a name="externalTrafficPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput"></a>

```typescript
public readonly externalTrafficPolicyInput: string;
```

- *Type:* string

---

##### `healthCheckNodePortInput`<sup>Optional</sup> <a name="healthCheckNodePortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput"></a>

```typescript
public readonly healthCheckNodePortInput: number;
```

- *Type:* number

---

##### `internalTrafficPolicyInput`<sup>Optional</sup> <a name="internalTrafficPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput"></a>

```typescript
public readonly internalTrafficPolicyInput: string;
```

- *Type:* string

---

##### `ipFamiliesInput`<sup>Optional</sup> <a name="ipFamiliesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput"></a>

```typescript
public readonly ipFamiliesInput: string[];
```

- *Type:* string[]

---

##### `ipFamilyPolicyInput`<sup>Optional</sup> <a name="ipFamilyPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput"></a>

```typescript
public readonly ipFamilyPolicyInput: string;
```

- *Type:* string

---

##### `loadBalancerClassInput`<sup>Optional</sup> <a name="loadBalancerClassInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput"></a>

```typescript
public readonly loadBalancerClassInput: string;
```

- *Type:* string

---

##### `loadBalancerIpInput`<sup>Optional</sup> <a name="loadBalancerIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput"></a>

```typescript
public readonly loadBalancerIpInput: string;
```

- *Type:* string

---

##### `loadBalancerSourceRangesInput`<sup>Optional</sup> <a name="loadBalancerSourceRangesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput"></a>

```typescript
public readonly loadBalancerSourceRangesInput: string[];
```

- *Type:* string[]

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput"></a>

```typescript
public readonly portInput: IResolvable | ServiceV1SpecPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>[]

---

##### `publishNotReadyAddressesInput`<sup>Optional</sup> <a name="publishNotReadyAddressesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput"></a>

```typescript
public readonly publishNotReadyAddressesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput"></a>

```typescript
public readonly selectorInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sessionAffinityConfigInput`<sup>Optional</sup> <a name="sessionAffinityConfigInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput"></a>

```typescript
public readonly sessionAffinityConfigInput: ServiceV1SpecSessionAffinityConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `allocateLoadBalancerNodePorts`<sup>Required</sup> <a name="allocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts"></a>

```typescript
public readonly allocateLoadBalancerNodePorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIp`<sup>Required</sup> <a name="clusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp"></a>

```typescript
public readonly clusterIp: string;
```

- *Type:* string

---

##### `clusterIps`<sup>Required</sup> <a name="clusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps"></a>

```typescript
public readonly clusterIps: string[];
```

- *Type:* string[]

---

##### `externalIps`<sup>Required</sup> <a name="externalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps"></a>

```typescript
public readonly externalIps: string[];
```

- *Type:* string[]

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName"></a>

```typescript
public readonly externalName: string;
```

- *Type:* string

---

##### `externalTrafficPolicy`<sup>Required</sup> <a name="externalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy"></a>

```typescript
public readonly externalTrafficPolicy: string;
```

- *Type:* string

---

##### `healthCheckNodePort`<sup>Required</sup> <a name="healthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort"></a>

```typescript
public readonly healthCheckNodePort: number;
```

- *Type:* number

---

##### `internalTrafficPolicy`<sup>Required</sup> <a name="internalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy"></a>

```typescript
public readonly internalTrafficPolicy: string;
```

- *Type:* string

---

##### `ipFamilies`<sup>Required</sup> <a name="ipFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies"></a>

```typescript
public readonly ipFamilies: string[];
```

- *Type:* string[]

---

##### `ipFamilyPolicy`<sup>Required</sup> <a name="ipFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy"></a>

```typescript
public readonly ipFamilyPolicy: string;
```

- *Type:* string

---

##### `loadBalancerClass`<sup>Required</sup> <a name="loadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass"></a>

```typescript
public readonly loadBalancerClass: string;
```

- *Type:* string

---

##### `loadBalancerIp`<sup>Required</sup> <a name="loadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp"></a>

```typescript
public readonly loadBalancerIp: string;
```

- *Type:* string

---

##### `loadBalancerSourceRanges`<sup>Required</sup> <a name="loadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges"></a>

```typescript
public readonly loadBalancerSourceRanges: string[];
```

- *Type:* string[]

---

##### `publishNotReadyAddresses`<sup>Required</sup> <a name="publishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses"></a>

```typescript
public readonly publishNotReadyAddresses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector"></a>

```typescript
public readonly selector: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceV1Spec;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---


### ServiceV1SpecPortList <a name="ServiceV1SpecPortList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1SpecPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get"></a>

```typescript
public get(index: number): ServiceV1SpecPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceV1SpecPort[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>[]

---


### ServiceV1SpecPortOutputReference <a name="ServiceV1SpecPortOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1SpecPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol">resetAppProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort">resetNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort">resetTargetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppProtocol` <a name="resetAppProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol"></a>

```typescript
public resetAppProtocol(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNodePort` <a name="resetNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort"></a>

```typescript
public resetNodePort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTargetPort` <a name="resetTargetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort"></a>

```typescript
public resetTargetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput">appProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput">nodePortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol">appProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort">nodePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort">targetPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appProtocolInput`<sup>Optional</sup> <a name="appProtocolInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput"></a>

```typescript
public readonly appProtocolInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodePortInput`<sup>Optional</sup> <a name="nodePortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput"></a>

```typescript
public readonly nodePortInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput"></a>

```typescript
public readonly targetPortInput: string;
```

- *Type:* string

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol"></a>

```typescript
public readonly appProtocol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodePort`<sup>Required</sup> <a name="nodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort"></a>

```typescript
public readonly nodePort: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort"></a>

```typescript
public readonly targetPort: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceV1SpecPort;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>

---


### ServiceV1SpecSessionAffinityConfigClientIpOutputReference <a name="ServiceV1SpecSessionAffinityConfigClientIpOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceV1SpecSessionAffinityConfigClientIp;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---


### ServiceV1SpecSessionAffinityConfigOutputReference <a name="ServiceV1SpecSessionAffinityConfigOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp">putClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp">resetClientIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientIp` <a name="putClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp"></a>

```typescript
public putClientIp(value: ServiceV1SpecSessionAffinityConfigClientIp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---

##### `resetClientIp` <a name="resetClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp"></a>

```typescript
public resetClientIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp">clientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput">clientIpInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp"></a>

```typescript
public readonly clientIp: ServiceV1SpecSessionAffinityConfigClientIpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a>

---

##### `clientIpInput`<sup>Optional</sup> <a name="clientIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput"></a>

```typescript
public readonly clientIpInput: ServiceV1SpecSessionAffinityConfigClientIp;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceV1SpecSessionAffinityConfig;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---


### ServiceV1StatusList <a name="ServiceV1StatusList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1StatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get"></a>

```typescript
public get(index: number): ServiceV1StatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ServiceV1StatusLoadBalancerIngressList <a name="ServiceV1StatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1StatusLoadBalancerIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get"></a>

```typescript
public get(index: number): ServiceV1StatusLoadBalancerIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ServiceV1StatusLoadBalancerIngressOutputReference <a name="ServiceV1StatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceV1StatusLoadBalancerIngress;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a>

---


### ServiceV1StatusLoadBalancerList <a name="ServiceV1StatusLoadBalancerList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1StatusLoadBalancerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get"></a>

```typescript
public get(index: number): ServiceV1StatusLoadBalancerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ServiceV1StatusLoadBalancerOutputReference <a name="ServiceV1StatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1StatusLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress"></a>

```typescript
public readonly ingress: ServiceV1StatusLoadBalancerIngressList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceV1StatusLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a>

---


### ServiceV1StatusOutputReference <a name="ServiceV1StatusOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1StatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: ServiceV1StatusLoadBalancerList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceV1Status;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a>

---


### ServiceV1TimeoutsOutputReference <a name="ServiceV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceV1 } from '@cdktf/provider-kubernetes'

new serviceV1.ServiceV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

---



